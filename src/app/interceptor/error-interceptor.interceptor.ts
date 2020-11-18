import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

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
          console.log(error);
          this.authService.httpErrorModal();
          return throwError(error);
        })
      );
  }
}
