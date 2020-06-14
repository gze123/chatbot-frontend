import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqAdminComponent} from './faq-admin.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {FaqCreateComponent} from './faq-create/faq-create.component';
import {FaqManageComponent} from './faq-manage/faq-manage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FaqAdminComponent, FaqCreateComponent, FaqManageComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FaqAdminModule {
}
