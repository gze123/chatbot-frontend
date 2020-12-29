import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {Forum} from '../../models/forum.model';
import {ForumService} from '../../services/forum-service.service';
import {zip} from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forumData: Forum[] = [];
  forumDisplayData: Forum[] = [];
  ownForumData: Forum[] = [];
  @Input()
  role: string;
  pageLoading = false;
  pagination: number;
  displayPagination: number;
  ownPagination: number;

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
      this.forumDisplayData = response.result.data;
      this.ownForumData = this.forumData.filter(x => x.createdBy === localStorage.getItem('id'));
      this.ownPagination = this.ownForumData.length;
      this.pagination = response.result.total;
      this.displayPagination = response.result.total;
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

  search($event) {
    this.pageLoading = true;
    this.forumService.getForumTitleByKeyword($event.keyword).subscribe(res => {
      const response: any = res;
      this.forumData = response.result.data;
      this.pagination = response.result.total;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  reset($event: any) {
    this.forumData = this.forumDisplayData;
    this.pagination = this.displayPagination;
  }
}

