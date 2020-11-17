import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstants {
  // public static API_LOCAL = "localhost:3600";
  public static API_WEB = 'https://fcsit-chatbot-server.herokuapp.com';
  public static UPDATE = '/update';
  public static DELETE = '/delete';

  // chatbot
  public static CHATBOT = AppConstants.API_WEB + '/chatbot';

  // auth
  public static USER = '/user';
  public static AUTH_LOGIN = AppConstants.API_WEB + AppConstants.USER + '/login';
  public static AUTH_REGISTER = AppConstants.API_WEB + AppConstants.USER + '/register';
  public static AUTH_LOGOUT = AppConstants.API_WEB + AppConstants.USER + '/logout';
  public static RESET_PASSWORD_LINK = AppConstants.API_WEB + AppConstants.USER + '/resetpasswordlink?email=';
  public static RESET_PASSWORD = AppConstants.API_WEB + AppConstants.USER + '/resetpassword';

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
  public static FORUM = '/conversation';
  public static FORUM_CREATE = AppConstants.API_WEB + AppConstants.FORUM;
  public static FORUM_GET = AppConstants.API_WEB + '/conversations?order=desc';
  public static FORUM_UPDATE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.UPDATE;
  public static FORUM_DELETE = AppConstants.API_WEB + AppConstants.FORUM + AppConstants.DELETE;

  // forum content
  public static COMMENT = '/reply';
  public static COMMENT_CREATE = AppConstants.API_WEB + AppConstants.COMMENT;
  public static COMMENT_GET = AppConstants.API_WEB + '/replies?conversationId=';
  public static COMMENT_UPDATE = AppConstants.API_WEB + AppConstants.COMMENT + AppConstants.UPDATE;
  public static COMMENT_DELETE = AppConstants.API_WEB + AppConstants.COMMENT + AppConstants.DELETE;

  // ticket
  public static TICKET = '/ticket';
  public static TICKET_CREATE = AppConstants.API_WEB + AppConstants.TICKET;
  public static TICKET_GET = AppConstants.API_WEB + '/tickets';
  public static TICKET_UPDATE = AppConstants.API_WEB + AppConstants.TICKET + AppConstants.UPDATE;

}
