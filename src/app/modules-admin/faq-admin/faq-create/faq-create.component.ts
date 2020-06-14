import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FaqService} from "../../../services/faq-service.service";

@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.css']
})
export class FaqCreateComponent implements OnInit {

  faqCreateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private faqService: FaqService
  ) {
  }

  submitForm(): void {
    for (const i in this.faqCreateForm.controls) {
      this.faqCreateForm.controls[i].markAsDirty();
      this.faqCreateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.faqCreateForm)
    let faqCreateModel = {
      question: this.faqCreateForm.controls.question.value,
      answer: this.faqCreateForm.controls.answer.value
    }
    this.faqService.addFaq(faqCreateModel).subscribe(res => {
      const response: any = res;
      // console.log(response.result)
      this.faqCreateForm.reset();
      location.reload();
    }, error => {

    })
  }

  ngOnInit(): void {
    this.faqCreateForm = this.fb.group({
      question: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
  }

}
