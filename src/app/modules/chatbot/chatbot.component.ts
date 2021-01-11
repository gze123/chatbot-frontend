import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../../shared/app.constant';
import {NewsAndAnnouncementService} from '../../services/news-and-announcement.service';
import {DatePipe} from '@angular/common';
import {zip} from 'rxjs';
import {ChatbotManagementService} from '../../services/chatbot-management.service';
import {ChatbotIntent} from '../../models/chatbot.model';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages = [];
  loading = false;
  cardLoading = false;
  // Random ID to maintain session with server
  sessionId = Math.random().toString(36).slice(-5);

  image: {
    url: string,
    type: string
  };
  chatbotIntentData: ChatbotIntent[];

  welcome = 'Hello student, I am Bot! Welcome to FSKTM General Inquiry and Discussion Platform, feel free to chat with me. I will be representing the office staff to answer to all of your questions.' +
    ' If I am not able to answer your question, please navigate to ticket section to address your problem directly to the office staff. Have a great day!';

  constructor(private http: HttpClient,
              private newsAndAnnouncementService: NewsAndAnnouncementService,
              private datePipe: DatePipe,
              private chatbotManagementService: ChatbotManagementService) {
  }

  ngOnInit() {
    this.cardLoading = true;
    const name = localStorage.getItem('username');
    this.addBotMessage('Hi ' + name + '. How can I help you? ');
    zip(this.chatbotManagementService.getIntent()).subscribe(res => {
      const intent: any = res[0];
      this.chatbotIntentData = intent.result.data;
      this.chatbotIntentData = this.chatbotIntentData.filter(x => x.intentType !== 'faqIntent');
      this.cardLoading = false;
    }, error => {
      this.cardLoading = false;
    });
  }

  handleUserMessage(event) {
    console.log(event);
    const text = event.message;
    this.processMsg(text);
  }

  addUserMessage(text) {
    this.messages.push({
      text,
      sender: 'You',
      reply: true,
      date: new Date()
    });
  }

  addBotMessage(response: any) {
    let text = '';
    let files = [];
    if (response.includes('responsePayload')) {
      const responsePayload = JSON.parse(response);
      if (responsePayload.responsePayload.texts.length > 0) {
        if (responsePayload.responsePayload.texts[0].includes('responsePayload')) {
          const resultAfterStringify = JSON.parse(responsePayload.responsePayload.texts[0]);
          const imageFile = resultAfterStringify.responsePayload.files;
          imageFile.forEach(image => {
            files.push({url: image, type: 'image/jpeg'});
          });
          text = resultAfterStringify.responsePayload.texts;
        }
      }
      const imageFile = responsePayload.responsePayload.files;
      imageFile.forEach(image => {
        if (image.includes('pdf')) {
          files.push({url: image, icon: 'file-text-outline'});
        } else {
          files.push({url: image, type: 'image/jpeg'});
        }
      });
      if (text === '') {
        text = responsePayload.responsePayload.texts;
      }
    } else {
      text = response;
    }
    this.messages.push({
      text,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'FSKTMBot',
      avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      date: new Date()
    });
  }

  sendMessage(text: string) {
    this.processMsg(text);
  }

  processMsg(text: string) {
    this.addUserMessage(text);

    this.loading = true;

    // Make the request
    this.http.post<any>(
      AppConstants.CHATBOT,
      {
        sessionId: this.sessionId,
        queryInput: {
          text: {
            text,
            languageCode: 'en-US'
          }
        }
      }
    )
      .subscribe(res => {
        this.addBotMessage(res.result);
        this.loading = false;
      });
  }
}
