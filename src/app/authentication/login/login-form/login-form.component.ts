import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;
  pageLoading = false;
  forgotPassword = false;
  @Output() resetPassword = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private nzModalService: NzModalService) {
  }

  submitForm(): void {
    this.pageLoading = true;
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const userLogin = {
      email: this.validateForm.controls.userName.value,
      password: this.validateForm.controls.password.value
    };


    console.log('username: ', this.validateForm.controls.userName.value);
    this.authService.login(userLogin).subscribe(res => {
      const response: any = res;
      this.pageLoading = false;
      localStorage.setItem('jwtToken', response.result.token);
      localStorage.setItem('role', response.result.user.role);
      localStorage.setItem('id', response.result.user._id);
      localStorage.setItem('username', response.result.user.username);
      if (response.result.user.role == 'staff') {
        this.router.navigate(['/admin/forum']).then(r => {
        });
      } else {
        this.router.navigate(['/student/forum/title']).then(r => {
        });
      }

    }, error => {
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Login Failed',
        nzContent: errorMsg,
        nzOnOk: () => {
        }
      });
      this.pageLoading = false;
    });

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  resetPasswordVisible(): void {
    this.forgotPassword = !this.forgotPassword;
    this.resetPassword.emit(this.forgotPassword);
  }

}
