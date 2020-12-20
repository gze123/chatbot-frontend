import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';
import {LostAndFound} from '../../../models/lost-and-found.model';
import {DomSanitizer} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lost-and-found-manage',
  templateUrl: './lost-and-found-manage.component.html',
  styleUrls: ['./lost-and-found-manage.component.css']
})
export class LostAndFoundManageComponent implements OnInit {

  lostAndFoundForm: FormGroup;

  lostAndFoundData: LostAndFound[];
  lostAndFoundDisplayData: LostAndFound[];

  isVisible = false;
  pageLoading = false;

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder,
    private lostAndFoundService: LostAndFoundService,
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    const data = {};
    this.lostAndFoundService.getLostAndFound(data).subscribe(res => {
      const response: any = res;
      console.log(response);
      this.lostAndFoundData = response.result.data;
      this.lostAndFoundDisplayData = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
    this.lostAndFoundForm = this.fb.group({
      item: [null],
      date: [null]
    });
  }

  search() {
    const item = this.lostAndFoundForm.controls.item.value;
    let minDate = '';
    let maxDate = '';
    if (this.lostAndFoundForm.controls.date.value) {
      minDate = this.datePipe.transform(new Date(this.lostAndFoundForm.controls.date.value[0]), 'yyyy/MM/dd');
      maxDate = this.datePipe.transform(new Date(this.lostAndFoundForm.controls.date.value[1]), 'yyyy/MM/dd');
    }
    const data = {
      item, minDate, maxDate
    };
    // search function
    this.pageLoading = true;
    this.lostAndFoundService.getLostAndFound(data).subscribe(res => {
      const response: any = res;
      this.lostAndFoundDisplayData = response.result;
      console.log(response.result);
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  deleteRow(id: string) {
    this.lostAndFoundDisplayData = this.lostAndFoundDisplayData.filter(d => d._id !== id);
    this.lostAndFoundData = this.lostAndFoundData.filter(d => d._id !== id);
    this.lostAndFoundService.deleteLostAndFound(id).subscribe(res => {
      console.log(res);
    }, error => {

    });
  }

  resetTable() {
    this.lostAndFoundDisplayData = this.lostAndFoundData;
  }
}
