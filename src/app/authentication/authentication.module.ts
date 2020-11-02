import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {RegisterFormComponent} from './register/register-form/register-form.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ForgotPasswordFormComponent} from './forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [AuthenticationComponent, RegisterFormComponent, ForgotPasswordFormComponent],
  exports: [
    AuthenticationComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthenticationModule {
}
