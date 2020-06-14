import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq.component';
import {RouterModule} from "@angular/router";
import {FAQ_ROUTES} from "./faq.route";
import {TranslateModule} from "@ngx-translate/core";
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  declarations: [FaqComponent],
  exports: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FAQ_ROUTES),
    TranslateModule,
    NgZorroAntdModule
  ]
})
export class FaqModule {
}
