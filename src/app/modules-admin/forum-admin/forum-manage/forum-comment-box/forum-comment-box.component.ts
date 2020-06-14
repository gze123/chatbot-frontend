import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-forum-comment-box',
  templateUrl: './forum-comment-box.component.html',
  styleUrls: ['./forum-comment-box.component.css']
})
export class ForumCommentBoxComponent implements OnInit {

  @Output()
  replyListener: EventEmitter<any>;
  inputValue: any;
  submitting: any;
  @Input()
  replyDetail: { conversationId: string, replyId: string }
  isVisible = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.replyDetail)
  }

  handleSubmit() {

  }
}
