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

    this.authService.login(userLogin).subscribe(res => {
      const response: any = res;
      this.pageLoading = false;
      this.authService.saveDetailsToLocalStorage(response);
      if (response.result.user.role === 'staff' || response.result.user.role === 'superadmin') {
        localStorage.setItem('staffRole', response.result.user.staffRole);
        this.router.navigate(['/admin/chatbot-management']).then(r => {
          if (r) {
          } else {
            console.log('fail to navigate');
          }
        });
      } else {
        this.router.navigate(['/student/home']).then(r => {
        });
      }

    }, error => {
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Login Failed',
        nzContent: errorMsg,
        nzOnOk: () => {
          this.validateForm.controls.password.reset();
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
