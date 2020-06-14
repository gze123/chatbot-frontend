import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-ticket-admin',
  templateUrl: './ticket-admin.component.html',
  styleUrls: ['./ticket-admin.component.css']
})
export class TicketAdminComponent implements OnInit {
  searchTicketForm: any;
  pageLoading = false;
  ticketData = [];

  constructor(
    private ticketService: TicketService
  ) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.ticketService.getTicket().subscribe(res => {
      const response: any = res;
      this.ticketData = response.result;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    })
  }

  search() {

  }

  reloadTable() {
    this.ngOnInit();
  }
}
