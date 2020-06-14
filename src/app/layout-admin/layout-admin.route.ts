import {LayoutAdminComponent} from "./layout-admin.component";
import {MODULE_ADMIN_ROUTES} from "../modules-admin/modules-admin.route";

export const LAYOUT_ADMIN_ROUTES = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: MODULE_ADMIN_ROUTES
  }
];
