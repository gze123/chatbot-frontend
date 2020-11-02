import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {User, UserLogin} from '../models/user.model';
import {ResetPassword} from '../models/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
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

  public getToken(): string {
    // admin
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyNWU3Zjc5Yzg5NjJjNmM2MTIyYTQiLCJpYXQiOjE1OTA4NDUwNTV9._Ht2Vy36nHm3EiZOBIpHzrUHc-dYfsTQA3k6n7iZ4-8';
    // student
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWQyNjQ5M2Y1YWY3OTEzZTA5Y2M3NDkiLCJpYXQiOjE1OTE3MDgzNTd9.rLxsM8PerLqw-hSjOm9SPFDHOZQx7gS-Tk6l6GPzrOI';
    return localStorage.getItem('jwtToken');
  }

}
