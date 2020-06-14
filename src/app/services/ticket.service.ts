import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../shared/app.constant";
import {SolutionModel, TicketCreateModel} from "../models/ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) {
  }

  addTicket(ticketModel: TicketCreateModel) {
    return this.http.post(AppConstants.TICKET_CREATE, ticketModel);
  }

  getTicket() {
    return this.http.get(AppConstants.TICKET_GET);
  }

  editTicket(solutionModel: SolutionModel) {
    return this.http.post(AppConstants.TICKET_UPDATE, solutionModel);
  }

}
