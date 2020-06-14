import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForumCommentBoxComponent} from './forum-comment-box/forum-comment-box.component';
import {ForumCreateComponent} from './forum-create/forum-create.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ForumCommentBoxComponent, ForumCreateComponent],
  exports: [
    ForumCreateComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ForumManageModule {
}
