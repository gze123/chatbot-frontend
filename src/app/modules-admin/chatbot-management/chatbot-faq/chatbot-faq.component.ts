import {Component, Input, OnInit} from '@angular/core';
import {ChatbotIntent} from '../../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-faq',
  templateUrl: './chatbot-faq.component.html',
  styleUrls: ['./chatbot-faq.component.css']
})
export class ChatbotFaqComponent implements OnInit {

  intentType = 'faqIntent';
  @Input()
  chatbotIntentData: ChatbotIntent[];

  constructor() {
  }

  ngOnInit(): void {
    if (this.chatbotIntentData.length > 0) {
      this.chatbotIntentData = this.chatbotIntentData.filter(x => x.intentType === this.intentType);
    }
  }

}
