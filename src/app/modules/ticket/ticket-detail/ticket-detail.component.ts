import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketModel} from "../../../models/ticket.model";
import {TicketService} from "../../../services/ticket.service";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  isVisible = false;

  @Input()
  ticketDetail: TicketModel;
  @Output()
  reloadTable = new EventEmitter();
  solution: string;
  submitLoading = false;

  constructor(
    private ticketService: TicketService,
    private nzModalService: NzModalService
  ) {
  }

  ngOnInit(): void {
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }

  getUserRole() {
    return localStorage.getItem('role') == 'staff' || localStorage.getItem('role') == 'superadmin' ;
  }

  submitSolution() {
    this.submitLoading = true;
    const solutionModel = {
      id: this.ticketDetail._id,
      solution: this.solution
    }
    this.ticketService.editTicket(solutionModel).subscribe(res => {
      this.submitLoading = false;
      this.nzModalService.info({
        nzTitle: "Solution submitted",
        nzOnOk: () => {
          this.closeModel();
          this.reloadTable.emit();
        }
      })
    }, error => {

    })
  }
}
