import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NewsAndAnnouncementService} from '../../../services/news-and-announcement.service';
import {NewsAndAnnouncementModel} from '../../../models/news-and-announcement.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {UploadFile} from 'ng-zorro-antd/upload';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-news-announcement-update',
  templateUrl: './news-announcement-update.component.html',
  styleUrls: ['./news-announcement-update.component.css']
})
export class NewsAnnouncementUpdateComponent implements OnInit {

  id: string;
  pageLoading = false;
  newsAndAnnouncement: NewsAndAnnouncementModel;
  newsAnnouncementUpdateForm!: FormGroup;
  fileList: UploadFile[] = [];
  imageList: UploadFile[] = [];
  public Editor = ClassicEditor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private msg: NzMessageService,
    private newsAndAnnouncementService: NewsAndAnnouncementService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.newsAnnouncementUpdateForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      image: [null],
      attachment: [null]
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.newsAndAnnouncementService.getNewsAndAnnouncementById(this.id).subscribe(res => {
      const response: any = res;
      this.newsAndAnnouncement = response.result[0];
      this.newsAnnouncementUpdateForm.controls.title.setValue(this.newsAndAnnouncement.title);
      this.newsAnnouncementUpdateForm.controls.content.setValue(this.newsAndAnnouncement.contents);
      this.newsAndAnnouncement.images.forEach((image) => {
        console.log(image);
        // this.imageList.push(
        //   {
        //     size: 0, type: '',
        //     // status: 'done',
        //     // uid: image.filePath,
        //     // name: image.fileName,
        //     // url: image.url
        //     uid: '1',
        //     name: 'xxx.png',
        //     status: 'done',
        //     response: 'Server Error 500', // custom error message to show
        //     url: 'http://www.baidu.com/xxx.png'
        //   }
        // );
      });
      console.log(this.imageList);
      this.pageLoading = false;
    }, err => {
      this.pageLoading = false;
    });
  }

  back() {
    this.location.back();
  }

  beforeUploadFile = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    console.log(file);
    return false;
  }

  beforeUploadImage = (file: UploadFile): boolean => {
    this.imageList = this.imageList.concat(file);
    return false;
  }

  submitForm() {
    this.pageLoading = true;
    this.newsAnnouncementUpdateForm.patchValue({
      image: this.imageList
    });
    this.newsAnnouncementUpdateForm.patchValue({
      attachment: this.fileList
    });
    const formData = new FormData();
    for (const i in this.newsAnnouncementUpdateForm.controls) {
      this.newsAnnouncementUpdateForm.controls[i].markAsDirty();
      this.newsAnnouncementUpdateForm.controls[i].updateValueAndValidity();
    }
    formData.append('title', this.newsAnnouncementUpdateForm.controls.title.value);
    formData.append('contents', this.newsAnnouncementUpdateForm.controls.content.value);
    this.imageList.forEach((file: any) => {
      formData.append('images', file);
    });
    this.fileList.forEach((file: any) => {
      formData.append('attachments', file);
    });
    formData.append('id', this.id);
    this.newsAndAnnouncementService.updateNewsAndAnnouncement(formData).subscribe(res => {
      this.pageLoading = false;
      this.msg.create('success', 'News/Announcement updated successfully');
      this.back();
    }, error => {
      this.pageLoading = false;
    });
  }
}
