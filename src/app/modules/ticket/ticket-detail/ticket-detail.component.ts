import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketModel} from '../../../models/ticket.model';
import {TicketService} from '../../../services/ticket.service';
import {NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  solutionForm: FormGroup;

  constructor(
    private ticketService: TicketService,
    private nzModalService: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.solutionForm = this.fb.group({
      solution: [null, [Validators.required]]
    });
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }

  getUserRole() {
    return localStorage.getItem('role') == 'staff' || localStorage.getItem('role') == 'superadmin';
  }

  submitSolution() {
    this.submitLoading = true;
    for (const i in this.solutionForm.controls) {
      this.solutionForm.controls[i].markAsDirty();
      this.solutionForm.controls[i].updateValueAndValidity();
    }
    this.solution = this.solutionForm.controls.solution.value;
    const solutionModel = {
      id: this.ticketDetail._id,
      solution: this.solution
    };
    this.ticketService.editTicket(solutionModel).subscribe(res => {
      this.submitLoading = false;
      this.nzModalService.info({
        nzTitle: 'Solution submitted',
        nzOnOk: () => {
          this.closeModel();
          this.reloadTable.emit();
        }
      });
    }, error => {

    });
  }
}
