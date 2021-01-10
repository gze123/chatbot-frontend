import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {ChatbotManagementService} from '../../services/chatbot-management.service';
import {ChatbotIntent} from '../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-management',
  templateUrl: './chatbot-management.component.html',
  styleUrls: ['./chatbot-management.component.css']
})
export class ChatbotManagementComponent implements OnInit {

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
    this.chatbotManagementService.getIntent().subscribe(res => {
      const response: any = res;
      this.chatbotIntentData = response.result.data;
      this.pageLoading = false;
    }, err => {
      this.pageLoading = false;
    });
  }

  reloadData($event: any) {
  }
}
