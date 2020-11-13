import {LayoutAdminComponent} from './layout-admin.component';
import {MODULE_ADMIN_ROUTES} from '../modules-admin/modules-admin.route';
import {AuthGuard} from '../guard/auth-guard.guard';
import {AccessGuard} from '../guard/access.guard';

export const LAYOUT_ADMIN_ROUTES = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: MODULE_ADMIN_ROUTES,
    canActivate: [AuthGuard, AccessGuard]
  }
];
