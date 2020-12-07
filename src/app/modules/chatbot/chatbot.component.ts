import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../../shared/app.constant';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages = [];
  loading = false;

  // Random ID to maintain session with server
  sessionId = Math.random().toString(36).slice(-5);

  image: {
    url: string,
    type: string
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const name = localStorage.getItem('username');
    this.addBotMessage('Hi ' + name + '. How can I help you? ');
  }

  handleUserMessage(event) {
    console.log(event);
    const text = event.message;
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
      const result = JSON.parse(response);
      console.log(result.responsePayload.files);
      const imageFile = result.responsePayload.files;
      imageFile.forEach(image => {
        files.push({url: image, type: 'image/jpeg'});
      });
      text = result.responsePayload.texts;
    } else {
      text = response;
    }
    this.messages.push({
      text,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'Bot',
      avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      date: new Date()
    });
  }

}
