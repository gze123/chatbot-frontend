import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForumComponent} from './forum.component';
import {RouterModule} from "@angular/router";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {ForumManageModule} from "./forum-manage/forum-manage.module";
import {ForumManageComponent} from "./forum-manage/forum-manage.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ForumComponent, ForumManageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    TranslateModule,
    FormsModule,
    ForumManageModule
  ]
})
export class ForumModule {
}
