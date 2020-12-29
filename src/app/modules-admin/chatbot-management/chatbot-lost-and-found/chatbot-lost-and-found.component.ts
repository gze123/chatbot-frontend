import {Component, Input, OnInit} from '@angular/core';
import {ChatbotIntent} from '../../../models/chatbot.model';

@Component({
  selector: 'app-chatbot-lost-and-found',
  templateUrl: './chatbot-lost-and-found.component.html',
  styleUrls: ['./chatbot-lost-and-found.component.css']
})
export class ChatbotLostAndFoundComponent implements OnInit {

  intentType = 'lnfIntent';
  @Input()
  chatbotIntentData: ChatbotIntent[];

  constructor() { }

  ngOnInit(): void {
    if (this.chatbotIntentData.length > 0) {
      this.chatbotIntentData = this.chatbotIntentData.filter(x => x.intentType === this.intentType);
    }
  }

}
