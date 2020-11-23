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

  private refreshTokenInProgress = false;
  private refreshTokenSubject: Subject<any> = new BehaviorSubject<any>(null);

  handleError(error: HttpErrorResponse) {
    this.authService.httpErrorModal();
    return throwError(error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.authService.getToken();
    const decodedToken: JwtTokenModel = jwtDecode(jwtToken);
    const date = new Date();
    if (window.location.href.includes('student') || window.location.href.includes('admin')) {
      if (date > decodedToken.exp) {
        if (!this.refreshTokenInProgress) {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authService.getRefreshToken()}`
            }
          });
          return this.authService.refresh().pipe(
            switchMap((response: any) => {
              localStorage.setItem('jwtToken', response.result.token);
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.getToken()}`
                }
              });
              window.location.reload();
              return Observable.throw(request);
            })
          );
        } else {
          return this.refreshTokenSubject.pipe(
            filter(res => res !== null),
            take(1),
            switchMap((res) => {
              return next.handle(request);
            }));
        }
      }
    }
  }
}
