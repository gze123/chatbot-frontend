import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementAdminComponent } from './user-management-admin.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { UserManagementManageComponent } from './user-management-manage/user-management-manage.component';
import { UserManagementCreateComponent } from './user-management-create/user-management-create.component';
import { RoleManagementCreateComponent } from './role-management-create/role-management-create.component';
import { RoleManagementManageComponent } from './role-management-manage/role-management-manage.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserManagementAdminComponent, UserManagementManageComponent, UserManagementCreateComponent, RoleManagementCreateComponent, RoleManagementManageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class UserManagementAdminModule { }
