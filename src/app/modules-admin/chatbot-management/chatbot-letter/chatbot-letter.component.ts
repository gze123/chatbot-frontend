import {Component, Input, OnInit} from '@angular/core';
import {ChatbotIntent} from '../../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-letter',
  templateUrl: './chatbot-letter.component.html',
  styleUrls: ['./chatbot-letter.component.css']
})
export class ChatbotLetterComponent implements OnInit {

  intentType = 'letterIntent';
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
