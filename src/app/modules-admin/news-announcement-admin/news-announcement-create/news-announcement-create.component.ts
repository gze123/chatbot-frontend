import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';
import {UploadFile} from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-news-announcement-create',
  templateUrl: './news-announcement-create.component.html',
  styleUrls: ['./news-announcement-create.component.css']
})
export class NewsAnnouncementCreateComponent implements OnInit {

  newsAnnouncementCreateForm!: FormGroup;
  pageLoading = false;
  fileList: UploadFile[] = [];
  imageList: UploadFile[] = [];
  images = [];
  uploading = false;
  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private newsAnnouncementService: NewsAndAnnouncementService
  ) {
  }

  ngOnInit(): void {
    this.newsAnnouncementCreateForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      image: [null],
      attachment: [null]
    });
  }

  beforeUploadFile = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  beforeUploadImage = (file: UploadFile): boolean => {
    this.imageList = this.imageList.concat(file);
    return false;
  };

  submitForm(): void {
    this.pageLoading = true;
    this.newsAnnouncementCreateForm.patchValue({
      image: this.imageList
    });
    this.newsAnnouncementCreateForm.patchValue({
      attachment: this.fileList
    });
    const formData = new FormData();
    for (const i in this.newsAnnouncementCreateForm.controls) {
      this.newsAnnouncementCreateForm.controls[i].markAsDirty();
      this.newsAnnouncementCreateForm.controls[i].updateValueAndValidity();
    }
    formData.append('title', this.newsAnnouncementCreateForm.controls.title.value);
    formData.append('contents', this.newsAnnouncementCreateForm.controls.content.value);
    const blod = new Blob();
    if (this.imageList.length !== 0) {
      this.imageList.forEach((file: any) => {
        formData.append('images', file);
      });
    }
    else {
      formData.append('images', blod);
    }
    if (this.fileList.length !== 0) {
      this.fileList.forEach((file: any) => {
        formData.append('attachments', file);
      });
    }
    else {
      const emp: any[] = [];
      formData.append('attachments', blod);
    }
    this.newsAnnouncementService.addNewsAndAnnouncement(formData).subscribe(res => {
      this.pageLoading = false;
      this.msg.create('success', 'News/Announcement created successfully');
      location.reload();
    }, error => {
      this.pageLoading = false;
    });

  }

}
