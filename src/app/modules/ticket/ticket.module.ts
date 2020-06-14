import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketComponent} from './ticket.component';
import {RouterModule} from "@angular/router";
import {TICKET_ROUTES} from "./ticket.route";
import {TranslateModule} from "@ngx-translate/core";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {AddTicketComponent} from './add-ticket/add-ticket.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';


@NgModule({
  declarations: [TicketComponent, AddTicketComponent, TicketDetailComponent],
  exports: [
    TicketDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TICKET_ROUTES),
    TranslateModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TicketModule {
}
