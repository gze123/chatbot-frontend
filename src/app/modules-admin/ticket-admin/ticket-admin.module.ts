import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketAdminComponent} from './ticket-admin.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {TicketModule} from "../../modules/ticket/ticket.module";


@NgModule({
  declarations: [TicketAdminComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule,
    ReactiveFormsModule,
    TicketModule
  ]
})
export class TicketAdminModule {
}
