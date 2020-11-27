import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConstants} from '../shared/app.constant';
import {CommentCreateModel, ForumCreateModel, ForumUpdateModel} from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient
  ) {
  }

  addForumTitle(forumCreateModel: ForumCreateModel) {
    return this.http.post(AppConstants.FORUM_CREATE, forumCreateModel);
  }

  getForumTitle() {
    return this.http.get(AppConstants.FORUM_GET);
  }

  editForum(forumUpdateModel: ForumUpdateModel) {
    return this.http.post(AppConstants.FORUM_UPDATE, forumUpdateModel);
  }

  deleteForum(id: string) {
    let forumId = [];
    forumId.push(id);
    return this.http.post(AppConstants.FORUM_DELETE, {id: forumId});
  }

  addReplytoComment(reply: CommentCreateModel) {
    return this.http.post(AppConstants.COMMENT_CREATE, reply);
  }

  addReplyToForum(reply: { conversationId: string, content: string }) {
    return this.http.post(AppConstants.COMMENT_CREATE, reply);
  }

  getReplyByForumId(id: string) {
    return this.http.get(AppConstants.COMMENT_GET + `conversationId=${id}`);
  }

  getReplyByForumIdAndReplyId(forumId: string, replyId: string) {
    let params = new HttpParams().set('conversationId', forumId).set('replyId', replyId);
    return this.http.get(AppConstants.COMMENT_GET, {params: params});
  }

  editReply(id: string, content: string) {
    const editReply = {
      id: id,
      content: content
    };
    return this.http.post(AppConstants.COMMENT_UPDATE, editReply);
  }

  deleteReply(id: string) {
    let replyId = [];
    replyId.push(id);
    return this.http.post(AppConstants.COMMENT_DELETE, {id: replyId});
  }


}
