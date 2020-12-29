import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {Forum} from '../../models/forum.model';
import {ForumService} from '../../services/forum-service.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forumData: Forum[] = [];
  @Input()
  role: string;
  pageLoading = false;
  pagination: number;

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private forumService: ForumService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.forumService.getForumTitle().subscribe(res => {
      const response: any = res;
      console.log(response);
      this.forumData = response.result.data;
      this.pagination = response.result.total;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  view(item: any): void {
    this.msg.success(item.email);
  }

  onPageIndexChange($event: number) {
    this.pageLoading = true;
    this.forumService.getForumTitleByPage($event).subscribe(res => {
      const response: any = res;
      this.forumData = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }
}

