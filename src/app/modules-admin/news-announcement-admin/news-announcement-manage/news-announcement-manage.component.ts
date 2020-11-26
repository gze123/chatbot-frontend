import {Component, OnInit} from '@angular/core';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';

@Component({
  selector: 'app-news-announcement-manage',
  templateUrl: './news-announcement-manage.component.html',
  styleUrls: ['./news-announcement-manage.component.css']
})
export class NewsAnnouncementManageComponent implements OnInit {
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
      this.newsAndAnnouncementData = response.result;
      console.log(response);
      this.pageLoading = false;
      }
      , err => {
        this.pageLoading = false;
      });


  }
}
