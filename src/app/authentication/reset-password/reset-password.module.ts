import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import {RouterModule} from '@angular/router';
import {RESET_PASSWORD_ROUTES} from './reset-password.route';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ResetPasswordComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RESET_PASSWORD_ROUTES),
    NgZorroAntdModule,
    ReactiveFormsModule,
  ]
})
export class ResetPasswordModule { }
