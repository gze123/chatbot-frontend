import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';
import {ChatbotIntent, ChatbotIntentDelete} from '../../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-general',
  templateUrl: './chatbot-general.component.html',
  styleUrls: ['./chatbot-general.component.css']
})
export class ChatbotGeneralComponent implements OnInit, OnChanges {

  chatbotIntentData: ChatbotIntent[];
  @Output()
  reloadTable = new EventEmitter();
  intents = ['faqIntent', 'lnfIntent', 'letterIntent'];

  constructor(
    private chatbotManagementService: ChatbotManagementService
  ) {
  }

  ngOnInit(): void {
    this.chatbotManagementService.getIntent().subscribe(res => {
      const response: any = res;
      this.chatbotIntentData = response.result.data;
      this.chatbotIntentData = this.chatbotIntentData.filter(x => !this.intents.includes(x.intentType));
    }, err => {
    });
  }

  reloadData($event: any) {
    this.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
