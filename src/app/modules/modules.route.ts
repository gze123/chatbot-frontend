import {FORUM_ROUTES} from './forum/forum.route';
import {ProfileComponent} from '../modules-admin/profile/profile.component';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {LostAndFoundComponent} from './lost-and-found/lost-and-found.component';
import {TicketComponent} from './ticket/ticket.component';

export const MODULE_ROUTES = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    Component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'forum',
    children: FORUM_ROUTES
  },
  {
    path: 'faq',
    Component: FaqComponent,
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'lost-and-found',
    Component: LostAndFoundComponent,
    loadChildren: () => import('./lost-and-found/lost-and-found.module').then(m => m.LostAndFoundModule)
  },
  {
    path: 'news-and-announcement',
    loadChildren: () => import('./news-and-announcement/news-and-announcement.module').then(m => m.NewsAndAnnouncementModule)
  },
  {
    path: 'my-tickets',
    Component: TicketComponent,
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];
