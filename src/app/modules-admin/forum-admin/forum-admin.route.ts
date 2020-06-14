import {ForumAdminComponent} from "./forum-admin.component";
import {ForumManageComponent} from "./forum-manage/forum-manage.component";

export const FORUM_ADMIN_ROUTE = [
  {
    path: '',
    component: ForumAdminComponent,
    loadChildren: () => import('./forum-admin.module').then(m => m.ForumAdminModule)
  },
  {
    path: ':id',
    component: ForumManageComponent,
    loadChildren: () => import('./forum-manage/forum-manage.module').then(m => m.ForumManageModule)
  },

]
