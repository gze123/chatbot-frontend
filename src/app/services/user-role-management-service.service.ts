import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {RoleCreate,  UserCreate} from '../models/user-role-management.model';

@Injectable({
  providedIn: 'root'
})
export class UserRoleManagementService {

  constructor(private http: HttpClient
  ) {
  }

  getAdminRoles() {
    return this.http.get(AppConstants.USER_MANAGEMENT_ROLES);
  }

  deleteAdminRoles(id: string) {
    let roleId = [];
    roleId.push(id);
    return this.http.post(AppConstants.USER_MANAGEMENT_ROLES_DELETE, {id: roleId});
  }

  createAdminRoles(roleCreate: RoleCreate) {
    return this.http.post(AppConstants.USER_MANAGEMENT_ROLES_CREATE, roleCreate);
  }

  getAdminUser() {
    return this.http.get(AppConstants.USER_MANAGEMENT_USERS + '?role=staff');
  }

  deleteAdminUser(id: string) {
    let adminId = [];
    adminId.push(id);
    return this.http.post(AppConstants.USER_MANAGEMENT_USERS_DELETE, {id: adminId});
  }

  createAdminUser(userCreate: UserCreate) {
    return this.http.post(AppConstants.USER_MANAGEMENT_USERS_CREATE, userCreate);
  }
}

