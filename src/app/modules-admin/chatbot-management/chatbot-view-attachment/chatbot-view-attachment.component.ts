import {Component, Input, OnInit} from '@angular/core';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';

@Component({
  selector: 'app-chatbot-view-attachment',
  templateUrl: './chatbot-view-attachment.component.html',
  styleUrls: ['./chatbot-view-attachment.component.css']
})
export class ChatbotViewAttachmentComponent implements OnInit {


  @Input()
  attachments: [];
  @Input()
  id: string;
  attachmentList = [];
  isVisible: boolean;

  constructor(
    private chatbotManagementService: ChatbotManagementService
  ) {
  }

  ngOnInit(): void {
    if (this.attachments.length > 0) {
      this.chatbotManagementService.getIntentById(this.id).subscribe(res => {
        const response: any = res;
        this.attachmentList = response.result.data[0].attachments;
      });
    }
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
