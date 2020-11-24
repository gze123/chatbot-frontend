import {Component, OnInit} from '@angular/core';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';
import {AdminUser} from '../../../models/user-role-management.model';

@Component({
  selector: 'app-user-management-manage',
  templateUrl: './user-management-manage.component.html',
  styleUrls: ['./user-management-manage.component.css']
})
export class UserManagementManageComponent implements OnInit {
  adminUser: AdminUser[] = [];
  pageLoading = false;

  constructor(
    private userRoleManagementService: UserRoleManagementService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.userRoleManagementService.getAdminUser().subscribe(res => {
      const response: any = res;
      this.adminUser = response.users;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  deleteUser(id) {
    this.adminUser = this.adminUser.filter(d => d._id !== id);
    this.userRoleManagementService.deleteAdminUser(id).subscribe(res => {
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

}
