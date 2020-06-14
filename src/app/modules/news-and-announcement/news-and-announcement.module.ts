import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsAndAnnouncementComponent} from "./news-and-announcement.component";
import {RouterModule} from "@angular/router";
import {NEWS_AND_ANNOUNCEMENT_ROUTES} from "./news-and-announcement.route";


@NgModule({
  declarations: [
    NewsAndAnnouncementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NEWS_AND_ANNOUNCEMENT_ROUTES)
  ]
})
export class NewsAndAnnouncementModule {
}
