import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModulesModule} from '../../shared/shared-modules/shared-modules.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    SharedModulesModule
  ]
})
export class ProfileModule { }
