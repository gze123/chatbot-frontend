import {Component, OnInit} from '@angular/core';
import {FaqService} from "../../services/faq-service.service";
import {Faq} from "../../models/faq.model";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  pageLoading = false;
  faqQuestionAndAnswer: Faq[];

  constructor(private faqService: FaqService) {
  }

  ngOnInit(): void {
    this.pageLoading = true;
    this.faqService.getFaq().subscribe(res => {
        const response: any = res;
        console.log(res);
        this.faqQuestionAndAnswer = response.result;
        this.pageLoading = false;
      },
      error => {
        this.pageLoading = false;
      }
    )
  }

}
