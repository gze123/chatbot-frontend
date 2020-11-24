import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/user-role-management.model';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';

@Component({
  selector: 'app-role-management-manage',
  templateUrl: './role-management-manage.component.html',
  styleUrls: ['./role-management-manage.component.css']
})
export class RoleManagementManageComponent implements OnInit {
  pageLoading: any;

  role: Role[] = [];

  constructor(
    private userManagementService: UserRoleManagementService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.userManagementService.getAdminRoles().subscribe(res => {
        const response: any = res;
        console.log(response)
        this.role = response.result;
        console.log(this.role);
        this.pageLoading = false;
      }, error => {
        this.pageLoading = false;
      }
    )
    ;
  }

  deleteRole(id) {
    this.role = this.role.filter(d => d._id !== id);
    this.userManagementService.deleteAdminRoles(id).subscribe(res => {
      const response: any = res;
    });
  }
}
