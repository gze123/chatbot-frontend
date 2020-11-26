import {NewsAnnouncementAdminComponent} from './news-announcement-admin.component';
import {NewAnnouncementViewComponent} from './new-announcement-view/new-announcement-view.component';


export const NEWS_ANNOUNCEMENT_ADMIN_ROUTE = [
  {
    path: '',
    component: NewsAnnouncementAdminComponent,
    loadChildren: () => import('./news-announcement-admin.module').then(m => m.NewsAnnouncementAdminModule)
  },
  {
    path: ':id',
    component: NewAnnouncementViewComponent,
    loadChildren: () => import('./new-announcement-view/new-announcement-view.module').then(m => m.NewAnnouncementViewModule)
  }
];
