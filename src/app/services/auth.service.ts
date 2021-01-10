import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {User, UserLogin} from '../models/user.model';
import {ResetPassword} from '../models/reset-password.model';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private nzModalService: NzModalService,
              private router: Router
  ) {
  }

  login(userLogin: UserLogin) {
    return this.http.post(AppConstants.AUTH_LOGIN, userLogin);
  }

  register(user: User) {
    return this.http.post(AppConstants.AUTH_REGISTER, user);
  }

  logout() {
    return this.http.post(AppConstants.AUTH_LOGOUT, {});
  }

  resetPasswordLink(email: string) {
    return this.http.get(AppConstants.RESET_PASSWORD_LINK + email);
  }

  resetPassword(resetPassword: ResetPassword) {
    return this.http.post(AppConstants.RESET_PASSWORD, resetPassword);
  }

  refresh() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.getRefreshToken()
    });
    const options = {headers};
    return this.http.post(AppConstants.REFRESH, {}, options);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  public getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  httpErrorModal() {
    this.nzModalService.error({
        nzTitle: 'Session Expired',
        nzContent: 'Please click "Ok" to re-login.',
        nzOnOk: () => this.logout().subscribe(res => {
          this.router.navigate(['/auth/login']).then(r => {
            if (r) {
              localStorage.clear();
            }
          });
        }, error => {
          localStorage.clear();
        })
      }
    );
  }

  public saveDetailsToLocalStorage(response: any) {
    localStorage.setItem('jwtToken', response.result.token);
    localStorage.setItem('refreshToken', response.result.refreshToken);
    localStorage.setItem('role', response.result.user.role);
    localStorage.setItem('id', response.result.user._id);
    localStorage.setItem('username', response.result.user.username);
    localStorage.setItem('fullname', response.result.user.fullname);
    localStorage.setItem('userId', response.result.user.userId);
    localStorage.setItem('email', response.result.user.email);
  }

}

