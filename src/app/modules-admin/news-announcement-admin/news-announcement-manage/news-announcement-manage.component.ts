import {Component, OnInit} from '@angular/core';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-news-announcement-manage',
  templateUrl: './news-announcement-manage.component.html',
  styleUrls: ['./news-announcement-manage.component.css']
})
export class NewsAnnouncementManageComponent implements OnInit {
  pageLoading = false;
  newsAndAnnouncementData: any;
  pagination: number;

  constructor(
    private newsAndAnnouncementService: NewsAndAnnouncementService,
    private msg: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.newsAndAnnouncementService.getNewsAndAnnouncement().subscribe(res => {
      const response: any = res;
      this.newsAndAnnouncementData = response.result.data;
      this.pagination = response.result.total;
      this.pageLoading = false;
      }
      , err => {
        this.pageLoading = false;
      });
  }

  delete(id: string) {
    this.newsAndAnnouncementService.deleteNewsAndAnnouncement(id).subscribe(res => {
      const response: any = res;
      this.ngOnInit();
      this.msg.create('success', 'News/Announcement deleted successfully');
    }, error => {

    });
  }

  onPageIndexChange($event: number) {
    console.log($event);
    this.pageLoading = true;
    this.newsAndAnnouncementService.getNewsAndAnnouncementByPage($event).subscribe(res => {
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
