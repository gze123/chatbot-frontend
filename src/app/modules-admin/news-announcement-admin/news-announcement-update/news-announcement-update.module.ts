import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsAnnouncementUpdateComponent } from './news-announcement-update.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [NewsAnnouncementUpdateComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    CKEditorModule,
    ReactiveFormsModule
  ]
})
export class NewsAnnouncementUpdateModule { }
