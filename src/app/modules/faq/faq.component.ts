import {Component, OnInit} from '@angular/core';
import {FaqService} from '../../services/faq-service.service';
import {Faq} from '../../models/faq.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  searchFaqForm!: FormGroup;
  pageLoading = false;
  faqQuestionAndAnswer: Faq[];
  faqQuestionAndAnswerDisplay: Faq[];

  constructor(
    private faqService: FaqService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.searchFaqForm = this.fb.group({
      keyword: [null, [Validators.required]],
    });
    this.pageLoading = true;
    this.faqService.getFaq().subscribe(res => {
        const response: any = res;
        this.faqQuestionAndAnswer = response.result.data;
        this.faqQuestionAndAnswerDisplay =  response.result.data;
        this.faqQuestionAndAnswer.forEach((faq) => faq.active = false
        );
        this.pageLoading = false;
      },
      error => {
        this.pageLoading = false;
      }
    );
  }

  submitForm() {
    this.pageLoading = true;
    for (const i in this.searchFaqForm.controls) {
      this.searchFaqForm.controls[i].markAsDirty();
      this.searchFaqForm.controls[i].updateValueAndValidity();
    }
    this.faqService.getFaqByKeyword(this.searchFaqForm.controls.keyword.value).subscribe(res => {
      const response: any = res;
      this.faqQuestionAndAnswer = response.result.data;
      this.pageLoading = false;
    }, error => {
      this.pageLoading = false;
    });
  }

  resetForm() {
    this.faqQuestionAndAnswer = this.faqQuestionAndAnswerDisplay;
  }
}
