import {LAYOUT_AUTH_ROUTES} from './layout-auth/layout-auth.route';
import {LAYOUT_STUDENT_ROUTES} from './layout-student/layout-student.route';
import {LAYOUT_ADMIN_ROUTES} from './layout-admin/layout-admin.route';
import {AuthGuard} from './guard/auth-guard.guard';
// import {SHARED_MODULE_ROUTE} from "./shared/shared-modules/shared.modules.route";


export const APP_ROUTES = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: LAYOUT_AUTH_ROUTES
  },
  {
    path: 'student',
    children: LAYOUT_STUDENT_ROUTES
  },
  {
    path: 'admin',
    children: LAYOUT_ADMIN_ROUTES
  }
];
