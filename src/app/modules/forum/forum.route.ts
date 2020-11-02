import {ForumComponent} from './forum.component';
import {ForumManageComponent} from './forum-manage/forum-manage.component';

export const FORUM_ROUTES = [
  {
    path: '',
    component: ForumComponent,
    loadChildren: () => import('./forum.module').then(m => m.ForumModule)
  },
  {
    path: ':id',
    component: ForumManageComponent,
    loadChildren: () => import('./forum-manage/forum-manage.module').then(m => m.ForumManageModule)
  },
];
