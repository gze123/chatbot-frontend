import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';
import {ChatbotIntent, ChatbotIntentDelete} from '../../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-general',
  templateUrl: './chatbot-general.component.html',
  styleUrls: ['./chatbot-general.component.css']
})
export class ChatbotGeneralComponent implements OnInit {

  chatbotIntentForm!: FormGroup;
  chatbotIntentData: ChatbotIntent[];
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private chatbotManagementService: ChatbotManagementService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.chatbotIntentForm = this.fb.group({
      intentName: [null, [Validators.required]],
      input: [null, [Validators.required]],
      response: [null, [Validators.required]],
      attachments: [null]
    });
    this.chatbotManagementService.getIntent().subscribe(res => {
      const response: any = res;
      this.chatbotIntentData = response.result.data;
      console.log(this.chatbotIntentData);
      this.pageLoading = false;
    }, err => {
      this.pageLoading = false;
    });
  }

  deleteRow(id: string) {
    const deletedIntentData = this.chatbotIntentData.filter(d => d._id === id);
    const deletedData: ChatbotIntentDelete = {
      id: deletedIntentData[0]._id,
      intentId: deletedIntentData[0].intentId,
      intentName: deletedIntentData[0].intentName
    };
    this.chatbotIntentData = this.chatbotIntentData.filter(d => d._id !== id);
    this.chatbotManagementService.deleteIntent(deletedData).subscribe(res => {
    }, error => {
    });
  }

  reloadData($event: any) {
    this.ngOnInit();
  }
}
