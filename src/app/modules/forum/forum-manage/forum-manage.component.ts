import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Comment, Forum} from '../../../models/forum.model';
import {Subscription, zip} from 'rxjs';
import {ForumCommentBoxComponent} from '../../../modules-admin/forum-admin/forum-manage/forum-comment-box/forum-comment-box.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../../../services/forum-service.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-forum-manage',
  templateUrl: './forum-manage.component.html',
  styleUrls: ['./forum-manage.component.css']
})
export class ForumManageComponent implements OnInit, OnDestroy {

  showUpdate: boolean = false;
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  forumDetail: Forum = new class implements Forum {
    __v: number;
    _id: string;
    createdAt: string;
    createdBy: string;
    creatorName: string;
    description: string;
    editable: boolean;
    numberOfReplies: number;
    title: string;
    updatedAt: string;
  };
  commentData: Comment[] = [];
  paramId: string;
  pageLoading = false;
  data: any[] = [];
  submitting = false;
  inputValue = '';
  private routeSub: Subscription;

  @ViewChild(ForumCommentBoxComponent)
  private forumCommentBox: ForumCommentBoxComponent;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private nzModalService: NzModalService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.paramId = params.id;
    });
    zip(this.forumService.getReplyByForumId(this.paramId), this.forumService.getForumTitle()).subscribe(res => {
      let responseReply: any = res[0];
      let responseForum: any = res[1];
      this.forumDetail = responseForum.result.filter(x => x._id == this.paramId)[0];
      this.commentData = responseReply.result;
      this.getReply();
      this.updateEditCache();
      console.log(this.commentData);
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  getReply() {
    this.commentData.forEach(x => {
      let reply = [];
      this.forumService.getReplyByForumIdAndReplyId(x.conversationId, x._id).subscribe(res => {
        const response: any = res;
        reply = response.result;
        x.reply = reply;
      }, error => {
      });
    });
  }

  replyTo(id: string) {
    console.log(id);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  handleSubmit()
    :
    void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    let commentCreateModel = {
      conversationId: this.forumDetail._id,
      content: content
    };

    this.forumService.addReplyToForum(commentCreateModel).subscribe(res => {
      const response: any = res;
      console.log(response.result);
      this.commentData = [...this.commentData, response.result].map(e => {
        return {
          ...e
        };
      });
      this.editCache[response.result._id] = {
        edit: false,
        data: response.result
      };
      this.updateEditCache();
      this.submitting = false;
    }, error => {
      this.submitting = false;
    });

  }

  updateForum() {
    this.showUpdate = true;
  }

  deleteForum(id: string) {
    this.nzModalService.confirm({
      nzTitle: 'Are you sure you want to delete this forum title?',
      nzOnOk: () => {
        this.forumService.deleteForum(id).subscribe(res => {
          const response: any = res;
          console.log(response);
          this.router.navigate(['/student/forum/title']).then();
        }, error => {

        });
      },
      nzOnCancel: instance => {
      }
    });

  }

  cancelUpdate() {
    this.showUpdate = false;
  }

  saveUpdate() {
    let editForumDetail = {
      id: this.forumDetail._id,
      title: this.forumDetail.title,
      description: this.forumDetail.description
    };
    console.log(editForumDetail);
    this.nzModalService.confirm({
      nzTitle: 'Are you sure to edit this forum title and description?',
      nzOnOk: () => {
        this.forumService.editForum(editForumDetail).subscribe(res => {
          console.log(res);
          this.showUpdate = false;
        }, error => {

        });
      },
      nzOnCancel: () => {
      }
    });

  }

  deleteComment(_id: string) {
    this.nzModalService.confirm({
      nzTitle: 'Are you sure you want to delete this comment?',
      nzContent: 'This action cannot be undone',
      nzOnOk: () => {
        this.forumService.deleteReply(_id).subscribe(res => {
          const response: any = res;
          console.log(response);
          location.reload();
        }, error => {

        });
      },
      nzOnCancel: instance => {
      }
    });
  }

  isAdminOrAuthor(id: string, editable?: boolean) {
    return localStorage.getItem('role') == 'staff' ||
      localStorage.getItem('id') == this.forumDetail.createdBy ||
      localStorage.getItem('id') == id ||
      editable;
  }

  editComment(_id: any) {
    this.editCache[_id].edit = true;
  }

  updateEditCache(): void {
    this.commentData.forEach(item => {
      this.editCache[item._id] = {
        edit: false,
        data: {...item}
      };
    });
    console.log(this.editCache);
  }

  saveComment(_id: any, content: string) {
    console.log(_id, content);
    this.forumService.editReply(_id, content).subscribe(res => {
      const response: any = res;
      console.log(response.result);
    }, error => {

    });
    this.editCache[_id].edit = false;
  }

}
