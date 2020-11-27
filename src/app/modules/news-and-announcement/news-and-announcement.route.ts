import {NewsAndAnnouncementComponent} from './news-and-announcement.component';
import {NewsAndAnnouncementViewComponent} from './news-and-annoucement-view/news-and-announcement-view.component';

export const NEWS_AND_ANNOUNCEMENT_ROUTES = [
  {
    path: '',
    component: NewsAndAnnouncementComponent
  },
  {
    path: ':id',
    component: NewsAndAnnouncementViewComponent
  }
];
