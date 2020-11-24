import {UserManagementAdminComponent} from './user-management-admin.component';


export const USER_MANAGEMENT_ADMIN_ROUTE = [
  {
    path: '',
    component: UserManagementAdminComponent,
    loadChildren: () => import('./user-management-admin.module').then(m => m.UserManagementAdminModule)
  },
  // {
  //   path: ':id',
  //   component: ForumManageComponent,
  //   loadChildren: () => import('./forum-manage/forum-manage.module').then(m => m.ForumManageModule)
  // },

];
