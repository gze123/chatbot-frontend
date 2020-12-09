import {Component, OnInit} from '@angular/core';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-announcement-manage',
  templateUrl: './news-announcement-manage.component.html',
  styleUrls: ['./news-announcement-manage.component.css']
})
export class NewsAnnouncementManageComponent implements OnInit {
  pageLoading = false;
  newsAndAnnouncementData: any;

  constructor(
    private newsAndAnnouncementService: NewsAndAnnouncementService,
    private router: Router
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

  delete(id: string) {
    this.newsAndAnnouncementService.deleteNewsAndAnnouncement(id).subscribe(res => {
      const response: any = res;
      console.log(response);
      this.ngOnInit();
    }, error => {

    });
  }
}
