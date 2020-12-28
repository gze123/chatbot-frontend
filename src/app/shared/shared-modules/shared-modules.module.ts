import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModulesComponent} from './shared-modules.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import { LostAndFoundUpdateComponent } from './lost-and-found-update/lost-and-found-update.component';
import { LostAndFoundViewImageComponent } from './lost-and-found-view-image/lost-and-found-view-image.component';


@NgModule({
    declarations: [SharedModulesComponent, ProfileUpdateComponent, LostAndFoundUpdateComponent, LostAndFoundViewImageComponent],
  exports: [
    ProfileUpdateComponent,
    LostAndFoundUpdateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ]
})
export class SharedModulesModule {
}
