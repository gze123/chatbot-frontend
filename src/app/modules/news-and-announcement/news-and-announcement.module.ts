import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsAndAnnouncementComponent} from './news-and-announcement.component';
import {RouterModule} from '@angular/router';
import {NEWS_AND_ANNOUNCEMENT_ROUTES} from './news-and-announcement.route';
import {NewsAnnouncementAdminModule} from '../../modules-admin/news-announcement-admin/news-announcement-admin.module';
import {NewsAndAnnouncementViewComponent} from './news-and-annoucement-view/news-and-announcement-view.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    NewsAndAnnouncementComponent,
    NewsAndAnnouncementViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NEWS_AND_ANNOUNCEMENT_ROUTES),
    NewsAnnouncementAdminModule,
    NgZorroAntdModule,
    TranslateModule
  ]
})
export class NewsAndAnnouncementModule {
}
