import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  validateForm!: FormGroup;
  pageLoading = false;
  username: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private nzModalService: NzModalService,
    private userService: UserRoleManagementService
  ) {
  }

  submitForm(): void {
    this.pageLoading = true;
    // tslint:disable-next-line:forin
    this.pageLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
    const user = {
      username: this.validateForm.controls.username.value,
      password: this.validateForm.controls.password.value,
    };
    this.userService.updateUser(user).subscribe(res => {
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Failed to update profile',
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
  };

  ngOnInit(): void {
    this.pageLoading = false;
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null, [Validators.required]],
    });
    this.username = localStorage.getItem('username');
    this.validateForm.controls.username.setValue(this.username);
  }
}
