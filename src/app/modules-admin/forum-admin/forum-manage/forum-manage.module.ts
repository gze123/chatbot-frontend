import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForumCommentBoxComponent} from './forum-comment-box/forum-comment-box.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ForumCreateComponent} from './forum-create/forum-create.component';


@NgModule({
  declarations: [ForumCommentBoxComponent, ForumCreateComponent],
  exports: [
    ForumCommentBoxComponent,
    ForumCreateComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class ForumManageModule {
}
