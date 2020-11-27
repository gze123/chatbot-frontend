import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsAnnouncementAdminComponent } from './news-announcement-admin.component';
import { NewsAnnouncementManageComponent } from './news-announcement-manage/news-announcement-manage.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';
import { NewsAnnouncementCreateComponent } from './news-announcement-create/news-announcement-create.component';
import { NewAnnouncementViewComponent } from './new-announcement-view/new-announcement-view.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [NewsAnnouncementAdminComponent, NewsAnnouncementManageComponent, NewsAnnouncementCreateComponent, NewAnnouncementViewComponent],
  exports: [
    NewAnnouncementViewComponent,
    NewsAnnouncementManageComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class NewsAnnouncementAdminModule { }
