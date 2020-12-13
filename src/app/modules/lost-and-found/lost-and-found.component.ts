import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LostAndFoundService} from '../../services/lost-and-found-service.service';
import {LostAndFound} from '../../models/lost-and-found.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.css']
})
export class LostAndFoundComponent implements OnInit {

  lostAndFoundForm: FormGroup;

  lostAndFoundData: LostAndFound[];
  lostAndFoundDisplayData: LostAndFound[];


  isVisible = false;
  pageLoading: boolean = false;

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder,
    private lostAndFoundService: LostAndFoundService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.lostAndFoundForm = this.fb.group({
      item: [null],
      date: [null]
    });
    this.pageLoading = true;
    const data = {};
    this.lostAndFoundService.getLostAndFound(data).subscribe(res => {
      const response: any = res;
      this.lostAndFoundDisplayData = response.result;
      this.lostAndFoundData = response.result;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
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

  resetTable() {
    this.lostAndFoundDisplayData = this.lostAndFoundData;
  }}
