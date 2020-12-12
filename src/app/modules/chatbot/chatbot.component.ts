import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../../shared/app.constant';
import {NewsAndAnnouncementService} from '../../services/news-and-announcement.service';
import {DatePipe} from '@angular/common';

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

  constructor(private http: HttpClient,
              private newsAndAnnouncementService: NewsAndAnnouncementService,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    const name = localStorage.getItem('username');
    this.addBotMessage('Hi ' + name + '. How can I help you? ');
    this.newsAndAnnouncementService.getNewsAndAnnouncement().subscribe(res => {
      const response: any = res;
      if (response.result) {
        const latestNews = response.result.pop();
        this.addBotMessage('Latest News and Announcement (' + this.datePipe.transform(latestNews.createdAt, 'yyy-MM-dd') + '):');
        this.addBotMessage(latestNews.title);
        if (latestNews.images) {
          const image = {responsePayload: {files: latestNews.images}};
          this.addBotMessage(JSON.stringify(image));
        }
        this.addBotMessage('Link to view the news: ' +
          'https://chatbot-and-ticketing-app.herokuapp.com/student/news-and-announcement/' + latestNews._id);
      }
    });
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
