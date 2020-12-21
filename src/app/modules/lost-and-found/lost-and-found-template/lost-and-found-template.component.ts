import {Component, Input, OnInit} from '@angular/core';
import {LostAndFound} from '../../../models/lost-and-found.model';
import {NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LostAndFoundService} from '../../../services/lost-and-found-service.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-lost-and-found-template',
  templateUrl: './lost-and-found-template.component.html',
  styleUrls: ['./lost-and-found-template.component.css']
})
export class LostAndFoundTemplateComponent implements OnInit {

  @Input()
  lostAndFoundType: string;
  lostAndFoundForm: FormGroup;

  lostAndFoundData: LostAndFound[];
  lostAndFoundDisplayData: LostAndFound[];
  pageLoading = false;

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
    const data = {
      type: this.lostAndFoundType
    };
    this.lostAndFoundService.getLostAndFound(data).subscribe(res => {
      const response: any = res;
      this.lostAndFoundDisplayData = response.result.data;
      this.lostAndFoundData = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  search() {
    const item = this.lostAndFoundForm.controls.item.value;
    let minDate = '';
    let maxDate = '';
    const type = this.lostAndFoundType;
    if (this.lostAndFoundForm.controls.date.value) {
      minDate = this.datePipe.transform(new Date(this.lostAndFoundForm.controls.date.value[0]), 'yyyy/MM/dd');
      maxDate = this.datePipe.transform(new Date(this.lostAndFoundForm.controls.date.value[1]), 'yyyy/MM/dd');
    }
    const data = {
      item, minDate, maxDate, type
    };
    this.pageLoading = true;
    this.lostAndFoundService.getLostAndFound(data).subscribe(res => {
      const response: any = res;
      this.lostAndFoundDisplayData = response.result.data;
      console.log(response.result);
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  resetTable() {
    this.lostAndFoundDisplayData = this.lostAndFoundData;
  }

}
