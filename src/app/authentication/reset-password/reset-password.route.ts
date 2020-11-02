import {ResetPasswordComponent} from './reset-password.component';

export const RESET_PASSWORD_ROUTES = [
  {
    path: ':token',
    component: ResetPasswordComponent,
    loadChildren: () => import('./reset-password.module').then(m => m.ResetPasswordModule)
  }
];
