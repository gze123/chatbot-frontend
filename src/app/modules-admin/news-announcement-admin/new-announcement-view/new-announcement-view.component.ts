import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Attachment} from '../../../models/news-and-announcement.model';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-new-announcement-view',
  templateUrl: './new-announcement-view.component.html',
  styleUrls: ['./new-announcement-view.component.css']
})
export class NewAnnouncementViewComponent implements OnInit {
  @Input() role;
  pageLoading = false;
  private routeSub: Subscription;
  paramId: string;
  title: string;
  contents: string;
  createdAt: Date;
  attachments: Attachment[] = [];
  effect = 'scrollx';
  imageUrl: SafeUrl;
  imageUrlArray: SafeUrl[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private newsAndAnnouncementService: NewsAndAnnouncementService,
    private sanitizer: DomSanitizer,
    private nzModalService: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.paramId = params.id;
    });
    this.newsAndAnnouncementService.getNewsAndAnnouncementById(this.paramId).subscribe(res => {
      const response: any = res;
      this.pageLoading = false;
      this.title = response.result.data[0].title;
      this.contents = response.result.data[0].contents;
      this.createdAt = response.result.data[0].createdAt;
      this.attachments = response.result.data[0].attachments;
      const images = response.result.data[0].images;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < images.length; i++) {
        let url = this.processImageToSafeUrl(images[i].data);
        this.imageUrlArray.push(url);
      }
    }, err => {
      this.pageLoading = false;
    });
  }

  back() {
    this.location.back();
  }

  processImageToSafeUrl(imageData: any) {
    const TYPED_ARRAY = new Uint8Array(imageData);
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      },
      '');
    const base64String = btoa(STRING_CHAR);
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + base64String);
  }

    goToLink(url) {
    window.open(url, '_blank');
  }

  deleteNewsAndAnnouncement(id: string) {
    this.nzModalService.confirm({
      nzTitle: 'Are you sure you want to delete this news/announcement?',
      nzOnOk: () => {
        this.newsAndAnnouncementService.deleteNewsAndAnnouncement(id).subscribe(res => {
          const response: any = res;
          console.log(response);
          this.back();
        }, error => {

        });
      },
      nzOnCancel: instance => {
      }
    });
  }

  isAdminRole() {
    if (this.role === 'student') {
      return false;
    }
    return true;
  }
}
