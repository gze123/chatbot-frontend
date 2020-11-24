import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {JwtTokenModel} from '../models/jwttoken.model';
import jwtDecode from 'jwt-decode';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private nzModalService: NzModalService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  private isRefreshing = false;
  private refreshTokenSubject: Subject<any> = new BehaviorSubject<any>(null);



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const date = new Date();
    if (this.authService.getToken()) {
      const decodedToken: JwtTokenModel = jwtDecode(this.authService.getToken());
      if (date > decodedToken.exp) {
        request = this.addToken(request, this.authService.getRefreshToken());
      } else {
        request = this.addToken(request, this.authService.getToken());
      }
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handleError(request, next);
      } else {
        this.authService.httpErrorModal();
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handleError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refresh().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.result.token);
          localStorage.setItem('jwtToken', token.result.token);
          return next.handle(this.addToken(request, token.result.token));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
