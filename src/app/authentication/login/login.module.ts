import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {LOGIN_ROUTES} from './login.route';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthenticationModule} from "../authentication.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    NgZorroAntdModule,
    TranslateModule,
    AuthenticationModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule {
}
