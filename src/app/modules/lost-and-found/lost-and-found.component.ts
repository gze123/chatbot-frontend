import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LostAndFoundService} from "../../services/lost-and-found-service.service";
import {LostAndFound} from "../../models/lost-and-found.model";

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.css']
})
export class LostAndFoundComponent implements OnInit {

  lostAndFoundForm: FormGroup;

  lostAndFoundData: LostAndFound[];

  // listOfSearchedData = [...this.lostAndFoundData];

  isVisible = false;
  pageLoading: boolean = false;

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder,
    private lostAndFoundService: LostAndFoundService,
  ) {
  }

  ngOnInit(): void {
    this.lostAndFoundForm = this.fb.group({
      item: [null],
      date: [null]
    });
    this.pageLoading = true;
    this.lostAndFoundService.getLostAndFound().subscribe(res => {
      const response: any = res;
      this.lostAndFoundData = response.result;
      console.log(response);
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  search() {
    console.log(this.lostAndFoundForm)
    //search function
    // this.listOfSearchedData = this.lostAndFoundData.filter()
  }

}
