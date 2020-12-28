import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LostAndFoundAdminComponent} from './lost-and-found-admin.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';
import {LostAndFoundManageComponent} from './lost-and-found-manage/lost-and-found-manage.component';
import {LostAndFoundCreateComponent} from './lost-and-found-create/lost-and-found-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LostAndFoundImageComponent} from './lost-and-found-manage/lost-and-found-image/lost-and-found-image.component';
import {LostAndFoundAdminTemplateComponent} from './lost-and-found-admin-template/lost-and-found-admin-template.component';
import {LostManageComponent} from './lost-and-found-manage/lost-manage/lost-manage.component';
import {FoundManageComponent} from './lost-and-found-manage/found-manage/found-manage.component';
import {SharedModulesModule} from '../../shared/shared-modules/shared-modules.module';


@NgModule({
  declarations: [LostAndFoundAdminComponent,
    LostAndFoundManageComponent,
    LostAndFoundCreateComponent,
    LostAndFoundImageComponent,
    LostAndFoundAdminTemplateComponent,
    LostManageComponent,
    FoundManageComponent],
  exports: [
    LostAndFoundImageComponent,
    LostAndFoundCreateComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedModulesModule
  ]
})
export class LostAndFoundAdminModule {
}
