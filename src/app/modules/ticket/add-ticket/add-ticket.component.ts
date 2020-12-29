import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../../services/ticket.service';
import {NzModalService} from 'ng-zorro-antd';
import {UserRoleManagementService} from '../../../services/user-role-management-service.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  addTicketForm: FormGroup;
  categories = [];
  @Output()
  triggerReloadTable = new EventEmitter<any>();
  formLoading = false;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private nzModalService: NzModalService,
    private userRoleManagement: UserRoleManagementService
  ) {
  }

  ngOnInit(): void {
    this.addTicketForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category: [null, [Validators.required]]
    });
    this.userRoleManagement.getAdminRoles().subscribe( res => {
      const response: any = res;
      response.result.data.forEach( x => {
        this.categories.push(x.role);
      });
    }, error => {});
  }

  submitForm() {
    this.formLoading = true;
    for (const i in this.addTicketForm.controls) {
      this.addTicketForm.controls[i].markAsDirty();
      this.addTicketForm.controls[i].updateValueAndValidity();
    }

    const ticketCreateModel = {
      title: this.addTicketForm.controls['title'].value,
      description: this.addTicketForm.controls['description'].value,
      category: this.addTicketForm.controls['category'].value
    };
    console.log(ticketCreateModel);
    this.ticketService.addTicket(ticketCreateModel).subscribe(res => {
      const response: any = res;
      this.addTicketForm.reset();
      this.formLoading = false;
      this.nzModalService.info({
        nzTitle: 'Ticket created successfully',
        nzOnOk: () => {
        }
      });
      this.triggerReloadTable.emit();
    }, error => {
      this.formLoading = false;
    });
  }

}
