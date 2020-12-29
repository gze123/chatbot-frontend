import {Component, Input, OnInit} from '@angular/core';
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

  chatbotIntentData: ChatbotIntent[];

  intents = ['faqIntent', 'lnfIntent', 'letterIntent'];
  constructor(
    private chatbotManagementService: ChatbotManagementService
  ) {
  }

  ngOnInit(): void {
    this.chatbotManagementService.getIntent().subscribe(res => {
      const response: any = res;
      this.chatbotIntentData = response.result.data;
      this.chatbotIntentData =  this.chatbotIntentData.filter(x => !this.intents.includes(x.intentType));
    }, err => {
    });
  }
}
