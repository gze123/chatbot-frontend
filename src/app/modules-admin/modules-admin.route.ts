import {FaqAdminComponent} from './faq-admin/faq-admin.component';
import {LostAndFoundAdminComponent} from './lost-and-found-admin/lost-and-found-admin.component';
import {FORUM_ADMIN_ROUTE} from './forum-admin/forum-admin.route';
import {TicketAdminComponent} from './ticket-admin/ticket-admin.component';
import {USER_MANAGEMENT_ADMIN_ROUTE} from './user-management-admin/user-management-admin.route';

export const MODULE_ADMIN_ROUTES = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./faq-admin/faq-admin.module').then(m => m.FaqAdminModule)
  // },
  {
    path: '',
    redirectTo: '/faq',
    pathMatch: 'full'
  },
  {
    path: 'forum',
    children: FORUM_ADMIN_ROUTE
  },
  {
    path: 'faq',
    component: FaqAdminComponent,
    loadChildren: () => import('./faq-admin/faq-admin.module').then(m => m.FaqAdminModule)
  },
  {
    path: 'lost-and-found',
    component: LostAndFoundAdminComponent,
    loadChildren: () => import('./lost-and-found-admin/lost-and-found-admin.module').then(m => m.LostAndFoundAdminModule)
  },
  // {
  //   path: 'news-and-announcement',
  //   loadChildren: () => import('./news-and-announcement/news-and-announcement.module').then(m => m.NewsAndAnnouncementModule)
  // },
  {
    path: 'tickets',
    component: TicketAdminComponent,
    loadChildren: () => import('./ticket-admin/ticket-admin.module').then(m => m.TicketAdminModule)
  },
  {
    path: 'user-management',
    children: USER_MANAGEMENT_ADMIN_ROUTE
  }
];
