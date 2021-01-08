import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatbotIntent, ChatbotIntentDelete} from '../../../models/chatbot.model';
import {NzMessageService} from 'ng-zorro-antd';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';

@Component({
  selector: 'app-chatbot-management-template',
  templateUrl: './chatbot-management-template.component.html',
  styleUrls: ['./chatbot-management-template.component.css']
})
export class ChatbotManagementTemplateComponent implements OnInit, OnChanges {

  chatbotIntentForm!: FormGroup;
  pageLoading = false;
  @Input()
  intentType: string;
  @Input()
  chatbotIntentData: ChatbotIntent[];
  intents = ['faqIntent', 'lnfIntent', 'letterIntent'];

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private chatbotManagementService: ChatbotManagementService
  ) {
  }

  ngOnChanges() {
    // Check if the data exists before using it
    if (this.chatbotIntentData) {
      this.chatbotIntentData.forEach(x => {
        if (x.attachments.length > 0) {
          this.chatbotManagementService.getIntentById(x._id).subscribe(res1 => {
            const responseData: any = res1;
            const attachments = responseData.result.data[0].attachments;
            x.attachments = attachments;
          });
        }
      });
    }

  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.chatbotIntentForm = this.fb.group({
      intentName: [null, [Validators.required]],
      input: [null, [Validators.required]],
      response: [null, [Validators.required]],
      attachments: [null]
    });
    this.pageLoading = false;
  }

  deleteRow(id: string) {
    const deletedIntentData = this.chatbotIntentData.filter(d => d._id === id);
    const deletedData: ChatbotIntentDelete = {
      intentId: deletedIntentData[0].intentId,
      intentName: deletedIntentData[0].intentName
    };
    this.chatbotIntentData = this.chatbotIntentData.filter(d => d._id !== id);
    this.chatbotManagementService.deleteIntent(deletedData).subscribe(res => {
      this.msg.create('success', 'Intent deleted successfully');
    }, error => {
    });
  }

  reloadData($event: any) {
    this.ngOnInit();
  }

  isGeneral() {
    if (this.intentType == 'faqIntent' || this.intentType == 'lnfIntent' || this.intentType == 'letterIntent') {
      return true;
    } else {
      return false;
    }
  }
}
