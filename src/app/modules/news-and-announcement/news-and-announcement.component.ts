import {Component, OnInit} from '@angular/core';
import {NewsAndAnnouncementService} from '../../services/news-and-announcement.service';

@Component({
  selector: 'app-news-and-announcement',
  templateUrl: './news-and-announcement.component.html',
  styleUrls: ['./news-and-announcement.component.css']
})
export class NewsAndAnnouncementComponent implements OnInit {

  pageLoading = false;
  newsAndAnnouncementData: any;

  constructor(
    private newsAndAnnouncementService: NewsAndAnnouncementService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.newsAndAnnouncementService.getNewsAndAnnouncement().subscribe(res => {
        const response: any = res;
        this.newsAndAnnouncementData = response.result.data;
        console.log(response);
        this.pageLoading = false;
      }
      , err => {
        this.pageLoading = false;
      });


  }
}
