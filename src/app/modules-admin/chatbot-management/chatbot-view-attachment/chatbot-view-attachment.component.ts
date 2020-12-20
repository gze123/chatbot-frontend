import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chatbot-view-attachment',
  templateUrl: './chatbot-view-attachment.component.html',
  styleUrls: ['./chatbot-view-attachment.component.css']
})
export class ChatbotViewAttachmentComponent implements OnInit {

  @Input()
  attachments: [];
  isVisible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  viewAttachment(attachments: any) {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
