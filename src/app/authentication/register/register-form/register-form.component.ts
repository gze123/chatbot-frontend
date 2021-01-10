import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  validateForm!: FormGroup;
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private nzModalService: NzModalService
  ) {
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    this.pageLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
    const user = {
      email: this.validateForm.controls.email.value,
      fullname: this.validateForm.controls.fullname.value,
      username: this.validateForm.controls.username.value,
      userId: this.validateForm.controls.matricNo.value,
      role: this.validateForm.controls.role.value,
      password: this.validateForm.controls.password.value,
      retypePassword: this.validateForm.controls.checkPassword.value
    };
    this.authService.register(user).subscribe(res => {
      const response: any = res;
      this.authService.saveDetailsToLocalStorage(response);
      this.router.navigate(['/student/home']).then(r => {
      });
    }, error => {
      this.pageLoading = false;
      let errorMsg = error.error.error;
      if (errorMsg == 'Duplicated userId.') {
        errorMsg = 'Duplicated matric number.';
      }
      this.nzModalService.error({
        nzTitle: 'Failed to register',
        nzContent: errorMsg,
        nzOnOk: () => {
          this.validateForm.controls.password.reset();
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
  };

  ngOnInit(): void {
    this.pageLoading = false;
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@siswa.um.edu.my$')]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null, [Validators.required]],
      fullname: [null, [Validators.required]],
      matricNo: [null, [Validators.required]],
      role: ['student']
    });
  }
}
