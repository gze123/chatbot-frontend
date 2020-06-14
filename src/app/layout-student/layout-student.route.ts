import {MODULE_ROUTES} from "../modules/modules.route";
import {LayoutStudentComponent} from "./layout-student.component";

export const LAYOUT_STUDENT_ROUTES = [
  {
    path: '',
    component: LayoutStudentComponent,
    children: MODULE_ROUTES,
    // canActivate: [AuthGuard, AccessGuard]
  }
];
