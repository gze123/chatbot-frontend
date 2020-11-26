import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstants {
  // public static API_LOCAL = "localhost:3600";
  public static API_WEB = 'https://fcsit-chatbot-server.herokuapp.com';
  public static UPDATE = '/update';
  public static DELETE = '/delete';
  public static USER = '/user';

  // chatbot
  public static CHATBOT = AppConstants.API_WEB + '/chatbot';

  // auth
  public static AUTH = '/auth';
  public static AUTH_LOGIN = AppConstants.API_WEB + AppConstants.AUTH + '/login';
  public static AUTH_REGISTER = AppConstants.API_WEB + AppConstants.AUTH + '/register';
  public static AUTH_LOGOUT = AppConstants.API_WEB + AppConstants.AUTH + '/logout';
  public static RESET_PASSWORD_LINK = AppConstants.API_WEB + AppConstants.AUTH + '/resetpasswordlink?email=';
  public static RESET_PASSWORD = AppConstants.API_WEB + AppConstants.AUTH + '/resetpassword';
  public static REFRESH = AppConstants.API_WEB + AppConstants.AUTH + '/refresh';

  // faq
  public static FAQ = '/questions';
  public static FAQ_CREATE = AppConstants.API_WEB + '/question';
  public static FAQ_GET = AppConstants.API_WEB + AppConstants.FAQ;
  public static FAQ_UPDATE = AppConstants.API_WEB + '/question' + AppConstants.UPDATE;
  public static FAQ_DELETE = AppConstants.API_WEB + AppConstants.FAQ + AppConstants.DELETE;

  // lost-and-found
  public static LOST_AND_FOUND = '/lostandfound';
  public static LOST_AND_FOUND_CREATE = AppConstants.API_WEB + AppConstants.LOST_AND_FOUND;
  public static LOST_AND_FOUND_GET = AppConstants.API_WEB + '/lostandfounds';
  public static LOST_AND_FOUND_GET_IMAGE = AppConstants.API_WEB + AppConstants.LOST_AND_FOUND + '/image?fileName=';
  public static LOST_AND_FOUND_UPDATE = AppConstants.API_WEB + AppConstants.LOST_AND_FOUND + AppConstants.UPDATE;
  public static LOST_AND_FOUND_DELETE = AppConstants.API_WEB + AppConstants.LOST_AND_FOUND + AppConstants.DELETE;

  // forum
  public static FORUM = '/forum';
  public static FORUM_CREATE = AppConstants.API_WEB + AppConstants.FORUM;
  public static FORUM_GET = AppConstants.API_WEB + '/forums?order=desc';
  public static FORUM_UPDATE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.UPDATE;
  public static FORUM_DELETE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.DELETE;

  // forum content
  public static COMMENT = '/reply';
  public static COMMENT_CREATE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.COMMENT;
  public static COMMENT_GET = AppConstants.API_WEB + AppConstants.FORUM + '/replies?';
  public static COMMENT_UPDATE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.COMMENT + AppConstants.UPDATE;
  public static COMMENT_DELETE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.COMMENT + AppConstants.DELETE;

  // ticket
  public static TICKET = '/ticket';
  public static TICKET_CREATE = AppConstants.API_WEB + AppConstants.TICKET;
  public static TICKET_GET = AppConstants.API_WEB + '/tickets';
  public static TICKET_UPDATE = AppConstants.API_WEB + AppConstants.TICKET + AppConstants.UPDATE;

  // news and announcement
  public static ANNOUNCEMENT = '/announcement';
  public static ANNOUNCEMENT_CREATE = AppConstants.API_WEB + AppConstants.ANNOUNCEMENT;
  public static ANNOUNCEMENT_UPDATE = AppConstants.API_WEB + AppConstants.ANNOUNCEMENT + AppConstants.UPDATE;
  public static ANNOUNCEMENT_GET = AppConstants.API_WEB + '/announcements';
  public static ANNOUNCEMENT_DELETE = AppConstants.API_WEB + AppConstants.ANNOUNCEMENT + AppConstants.DELETE;

  // user management
  public static USER_MANAGEMENT = '/management';
  public static ROLE = '/role';
  public static USER_MANAGEMENT_ROLES = AppConstants.API_WEB + AppConstants.USER_MANAGEMENT + '/roles';
  public static USER_MANAGEMENT_ROLES_CREATE = AppConstants.API_WEB + AppConstants.USER_MANAGEMENT + AppConstants.ROLE;
  public static USER_MANAGEMENT_ROLES_DELETE = AppConstants.API_WEB + AppConstants.USER_MANAGEMENT + AppConstants.ROLE + AppConstants.DELETE;
  public static USER_MANAGEMENT_USERS = AppConstants.API_WEB + '/users';
  public static USER_MANAGEMENT_USERS_CREATE = AppConstants.API_WEB + AppConstants.USER;
  public static USER_MANAGEMENT_USERS_DELETE = AppConstants.API_WEB + AppConstants.USER + AppConstants.DELETE;
}
