import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd";
import {ForumService} from "../../services/forum-service.service";
import {Forum} from "../../models/forum.model";

@Component({
  selector: 'app-forum-admin',
  templateUrl: './forum-admin.component.html',
  styleUrls: ['./forum-admin.component.css']
})
export class ForumAdminComponent implements OnInit {

  forumData: Forum[] = [];
  pageLoading = false;

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
      console.log(response)
      this.forumData = response.result;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    })
  }

  view(item: any): void {
    this.msg.success(item.email);
  }
}
