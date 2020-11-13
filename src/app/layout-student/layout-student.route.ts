import {MODULE_ROUTES} from '../modules/modules.route';
import {LayoutStudentComponent} from './layout-student.component';
import {AuthGuard} from '../guard/auth-guard.guard';
import {AccessGuard} from '../guard/access.guard';

export const LAYOUT_STUDENT_ROUTES = [
  {
    path: '',
    component: LayoutStudentComponent,
    children: MODULE_ROUTES,
    canActivate: [AuthGuard]
  }
];
