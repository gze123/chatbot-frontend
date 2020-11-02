import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  validateForm: FormGroup;
  token: string;
  pageLoading = false;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private fb: FormBuilder,
              private nzModalService: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    this.pageLoading = false;
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  submitForm() {
    this.pageLoading = true;
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
    const resetPassword = {
      token: this.token,
      password: this.validateForm.controls.password.value
    };
    this.authService.resetPassword(resetPassword).subscribe(res => {
      const response: any = res;
      console.log(res);
    }, error => {
      this.pageLoading = false;
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Failed to change password',
        nzContent: errorMsg,
        nzOnOk: () => {
        }
      });

    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }
}
