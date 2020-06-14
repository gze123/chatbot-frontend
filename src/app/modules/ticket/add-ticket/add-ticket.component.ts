import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../../../services/ticket.service";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  addTicketForm: FormGroup;
  categories = ['registration', 'timetable'];
  @Output()
  triggerReloadTable = new EventEmitter<any>()

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private nzModalService: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.addTicketForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null],
      category: [null]
    });
  }

  submitForm() {
    for (const i in this.addTicketForm.controls) {
      this.addTicketForm.controls[i].markAsDirty();
      this.addTicketForm.controls[i].updateValueAndValidity();
    }

    const ticketCreateModel = {
      title: this.addTicketForm.controls['title'].value,
      description: this.addTicketForm.controls['description'].value,
      category: this.addTicketForm.controls['category'].value
    }
    console.log(ticketCreateModel)
    this.ticketService.addTicket(ticketCreateModel).subscribe(res => {
      const response: any = res;
      this.addTicketForm.reset();
      this.nzModalService.info({
        nzTitle: "Ticket created successfully",
        nzOnOk: () => {
        }
      })
      this.triggerReloadTable.emit();
    }, error => {

    })
  }

}
