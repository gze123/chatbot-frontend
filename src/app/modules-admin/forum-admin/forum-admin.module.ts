import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForumAdminComponent} from './forum-admin.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {ForumManageComponent} from './forum-manage/forum-manage.component';
import {FormsModule} from "@angular/forms";
import {ForumManageModule} from "./forum-manage/forum-manage.module";


@NgModule({
  declarations: [ForumAdminComponent, ForumManageComponent],
  exports: [
    ForumAdminComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    ForumManageModule
  ]
})
export class ForumAdminModule {
}
