import {RESET_PASSWORD_ROUTES} from './reset-password/reset-password.route';

export const AUTH_ROUTE = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'resetpassword',
    children: RESET_PASSWORD_ROUTES
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  }
];
