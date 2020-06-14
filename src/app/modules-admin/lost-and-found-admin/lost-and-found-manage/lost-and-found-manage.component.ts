import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";
import {LostAndFoundService} from "../../../services/lost-and-found-service.service";
import {LostAndFound} from "../../../models/lost-and-found.model";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-lost-and-found-manage',
  templateUrl: './lost-and-found-manage.component.html',
  styleUrls: ['./lost-and-found-manage.component.css']
})
export class LostAndFoundManageComponent implements OnInit {

  lostAndFoundForm: FormGroup;

  lostAndFoundData: LostAndFound[];

  // listOfSearchedData = [...this.lostAndFoundData];

  isVisible = false;
  pageLoading = false;

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder,
    private lostAndFoundService: LostAndFoundService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.lostAndFoundService.getLostAndFound().subscribe(res => {
      const response: any = res;
      console.log(response);
      this.lostAndFoundData = response.result;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    })
    this.lostAndFoundForm = this.fb.group({
      item: [null],
      date: [null]
    });
  }

  search() {
    console.log(this.lostAndFoundForm)
    //search function
    // this.listOfSearchedData = this.lostAndFoundData.filter()
  }

  deleteRow(id: string) {
    this.lostAndFoundData = this.lostAndFoundData.filter(d => d._id !== id);
    this.lostAndFoundService.deleteLostAndFound(id).subscribe(res => {
      console.log(res);
    }, error => {

    })
  }
}
