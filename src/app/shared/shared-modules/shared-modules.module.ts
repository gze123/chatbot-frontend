import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModulesComponent} from './shared-modules.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [SharedModulesComponent, ProfileUpdateComponent],
    exports: [
        ProfileUpdateComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class SharedModulesModule {
}
