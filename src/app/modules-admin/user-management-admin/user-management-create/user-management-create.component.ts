import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';
import {Role} from '../../../models/user-role-management.model';

@Component({
  selector: 'app-user-management-create',
  templateUrl: './user-management-create.component.html',
  styleUrls: ['./user-management-create.component.css']
})
export class UserManagementCreateComponent implements OnInit {

  pageLoading = false;
  adminCreateForm!: FormGroup;
  fileList: UploadFile[] = [];
  form: FormGroup;
  staffRoleOption: Role[] = [];

  constructor(
    private fb: FormBuilder,
    private nzModalService: NzModalService,
    private userManagementService: UserRoleManagementService
  ) {
  }


  submitForm(): void {
    this.pageLoading = true;
    for (const i in this.adminCreateForm.controls) {
      this.adminCreateForm.controls[i].markAsDirty();
      this.adminCreateForm.controls[i].updateValueAndValidity();
    }
    const user = {
      email: this.adminCreateForm.controls.email.value,
      fullname: this.adminCreateForm.controls.fullname.value,
      username: this.adminCreateForm.controls.username.value,
      userId: this.adminCreateForm.controls.userId.value,
      role: 'staff',
      staffRole: this.adminCreateForm.controls.staffRole.value,
      password: this.adminCreateForm.controls.password.value,
      retypePassword: this.adminCreateForm.controls.retypePassword.value
    };
    console.log(user);
    this.userManagementService.createAdminUser(user).subscribe(res => {
      this.nzModalService.info({
        nzTitle: 'New admin created successfully',
        nzOnOk: () => {
          window.location.reload();
        }
      });
      this.pageLoading = false;
    }, error => {
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Create Admin Failed',
        nzContent: errorMsg,
        nzOnOk: () => {
          window.location.reload();
        }
      });
      this.pageLoading = false;
    });

  }

  ngOnInit(): void {
    this.userManagementService.getAdminRoles().subscribe(res => {
      const response: any = res;
      this.staffRoleOption = response.result.data;
    });
    this.adminCreateForm = this.fb.group({
      email: [null, [Validators.required]],
      fullname: [null, [Validators.required]],
      username: [null, [Validators.required]],
      userId: [null, [Validators.required]],
      staffRole: [null, [Validators.required]],
      password: [null, [Validators.required, this.confirmationValidator]],
      retypePassword: [null, [Validators.required]]
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.adminCreateForm.controls.retypePassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.adminCreateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }

}
