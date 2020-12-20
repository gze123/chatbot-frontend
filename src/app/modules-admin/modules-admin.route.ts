import {FaqAdminComponent} from './faq-admin/faq-admin.component';
import {LostAndFoundAdminComponent} from './lost-and-found-admin/lost-and-found-admin.component';
import {FORUM_ADMIN_ROUTE} from './forum-admin/forum-admin.route';
import {TicketAdminComponent} from './ticket-admin/ticket-admin.component';
import {USER_MANAGEMENT_ADMIN_ROUTE} from './user-management-admin/user-management-admin.route';
import {NEWS_ANNOUNCEMENT_ADMIN_ROUTE} from './news-announcement-admin/news-announcement-admin.route';
import {ChatbotManagementComponent} from './chatbot-management/chatbot-management.component';

export const MODULE_ADMIN_ROUTES = [
  {
    path: '',
    redirectTo: '/faq',
    pathMatch: 'full'
  },
  {
    path: 'chatbot-management',
    component: ChatbotManagementComponent,
    loadChildren: () => import('./chatbot-management/chatbot-management.module').then(m => m.ChatbotManagementModule)
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
  {
    path: 'news-and-announcement',
    children: NEWS_ANNOUNCEMENT_ADMIN_ROUTE
  },
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
