import {LayoutAuthComponent} from './layout-auth.component';
import {AUTH_ROUTE} from '../authentication/authentication.route';

export const LAYOUT_AUTH_ROUTES = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: AUTH_ROUTE
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'prefix'
  }
];
