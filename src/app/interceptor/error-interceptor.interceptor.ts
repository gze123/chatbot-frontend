import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
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

  handleError(error: HttpErrorResponse) {
    this.authService.httpErrorModal();
    return throwError(error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(error => {
          if (window.location.href.includes('student') || window.location.href.includes('admin')) {
            const jwtToken = this.authService.getToken();
            const refreshToken = this.authService.getRefreshToken();
            const decodedToken: JwtTokenModel = jwtDecode(jwtToken);
            const decodedRefreshToken: JwtTokenModel = jwtDecode(refreshToken);
            console.log(decodedToken);
            console.log(decodedRefreshToken);
            const date = new Date();
            if (date > decodedToken.exp) {
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.getRefreshToken()}`
                }
              });
              this.authService.refresh().pipe(take(1)).subscribe(res => {
                const response: any = res;
                localStorage.setItem('jwtToken', response.result.token);
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${this.authService.getToken()}`
                  }
                });
              }, err => {
                this.handleError(error);
              });
            }
          } else {
            this.handleError(error);
          }
          return throwError(error);
        })
      );
  }
}
