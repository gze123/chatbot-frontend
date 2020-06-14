import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd";
import {Forum} from "../../models/forum.model";
import {ForumService} from "../../services/forum-service.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
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

