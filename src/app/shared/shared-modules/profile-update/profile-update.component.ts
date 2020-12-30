import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';
import {Role, UserUpdate} from '../../../models/user-role-management.model';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  validateForm!: FormGroup;
  pageLoading = false;
  username: string;
  fullname: string;
  email: string;
  staffRoleOption: Role[] = [];
  staffRole: string;
  selectedRole: any;
  private user: any;

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
    if (this.isAdmin()) {
      this.user = {
        username: this.validateForm.controls.username.value,
        password: this.validateForm.controls.password.value,
        staffRole: this.validateForm.controls.staffRole.value
      };
    } else {
      this.user = {
        username: this.validateForm.controls.username.value,
        password: this.validateForm.controls.password.value,
      };
    }

    this.userService.updateUser(this.user).subscribe(res => {
      this.nzModalService.info({
        nzTitle: 'Profile updated successfully',
        nzOnOk: () => {
        }
      });
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
    if (this.isAdmin()) {
      this.staffRole = localStorage.getItem('staffRole');
      this.userService.getAdminRoles().subscribe(res => {
        const response: any = res;
        this.staffRoleOption = response.result.data;
      });
    }
    this.pageLoading = false;
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [{value: null, disabled: true}, [Validators.required]],
      fullname: [{value: null, disabled: true}, [Validators.required]],
      email: [{value: null, disabled: true}, [Validators.required]],
      staffRole: [null]
    });
    if(this.isAdmin()) {
      this.validateForm.get('staffRole').setValidators(Validators.required);
    }
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.fullname = localStorage.getItem('fullname');
    this.validateForm.controls.username.setValue(this.username);
    this.validateForm.controls.email.setValue(this.email);
    this.validateForm.controls.fullname.setValue(this.fullname);
  }

  isAdmin() {
    if (localStorage.getItem('role') === 'staff') {
      return true;
    } else {
      return false;
    }
  }

}
