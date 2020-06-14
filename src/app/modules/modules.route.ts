import {FORUM_ROUTES} from "./forum/forum.route";

export const MODULE_ROUTES = [
  {
    path: '',
    redirectTo: '/faq',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'forum/title',
    children: FORUM_ROUTES
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'lost-and-found',
    loadChildren: () => import('./lost-and-found/lost-and-found.module').then(m => m.LostAndFoundModule)
  },
  {
    path: 'news-and-announcement',
    loadChildren: () => import('./news-and-announcement/news-and-announcement.module').then(m => m.NewsAndAnnouncementModule)
  },
  {
    path: 'my-tickets',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  }
];
