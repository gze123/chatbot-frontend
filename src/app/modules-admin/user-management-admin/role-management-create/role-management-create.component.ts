import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';

@Component({
  selector: 'app-role-management-create',
  templateUrl: './role-management-create.component.html',
  styleUrls: ['./role-management-create.component.css']
})
export class RoleManagementCreateComponent implements OnInit {
  pageLoading = false;
  roleCreateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nzModalService: NzModalService,
    private userManagementService: UserRoleManagementService
  ) { }

  ngOnInit(): void {
    this.roleCreateForm = this.fb.group({
      role: [null, [Validators.required]]
    });
  }

  submitForm() {
    this.pageLoading = true;
    for (const i in this.roleCreateForm.controls) {
      this.roleCreateForm.controls[i].markAsDirty();
      this.roleCreateForm.controls[i].updateValueAndValidity();
    }
    const role = {
      role: this.roleCreateForm.controls.role.value
    };
    console.log(role);
    this.userManagementService.createAdminRoles(role).subscribe(res => {
      this.nzModalService.info({
        nzTitle: 'New role created successfully',
        nzOnOk: () => {
          window.location.reload();
        }
      });
      this.pageLoading = false;
    }, error => {
      const errorMsg = error.error.error;
      this.nzModalService.error({
        nzTitle: 'Create role Failed',
        nzContent: errorMsg,
        nzOnOk: () => {
          this.roleCreateForm.reset();
        }
      });
      this.pageLoading = false;
    });
  }
}
