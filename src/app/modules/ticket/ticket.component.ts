import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketData = [];
  ticketDisplayData = [];

  searchTicketForm: FormGroup;
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ) {
  }

  ngOnInit(): void {
    this.searchTicketForm = this.fb.group({
      ticketNo: [null]
    });
    this.pageLoading = true;
    this.ticketService.getTicket().subscribe(res => {
      const response: any = res;
      this.ticketData = response.result.data;
      this.ticketDisplayData = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  search() {
    this.pageLoading = true;
    this.ticketService.getTicketByKeyword(this.searchTicketForm.controls.ticketNo.value).subscribe(res => {
      const response: any = res;
      this.ticketData = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  reloadTable() {
    this.ngOnInit();
  }

  resetTable() {
    this.ticketData = this.ticketDisplayData;
  }
}
