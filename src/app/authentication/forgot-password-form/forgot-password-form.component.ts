import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {
  pageLoading = false;
  validateForm: FormGroup;
  @Output() back = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private nzModalService: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.email, Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@siswa.um.edu.my$')]]
    });
  }
  submitForm(): void {
    this.pageLoading = true;
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const email = this.validateForm.controls.userName.value;
    console.log('email: ', email);
    this.authService.resetPasswordLink(email).subscribe(res => {
      const response: any = res;
      this.pageLoading = false;
      this.nzModalService.info(
        {
          nzTitle: 'Email sent',
          nzContent: 'Reset password link has been sent to your registered email. Please check your email.',
          nzOnOk: () => console.log('Info OK')
        }
      );
    }, error => {
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Email Send Failed',
        nzContent: errorMsg,
        nzOnOk: () => {
        }
      });
      this.pageLoading = false;
    });
  }

  backToLogin(): void {
    this.back.emit(false);
  }
}
