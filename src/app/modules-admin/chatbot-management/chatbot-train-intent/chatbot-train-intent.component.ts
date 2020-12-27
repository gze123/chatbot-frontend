import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-chatbot-train-intent',
  templateUrl: './chatbot-train-intent.component.html',
  styleUrls: ['./chatbot-train-intent.component.css']
})
export class ChatbotTrainIntentComponent implements OnInit {


  @Input()
  intentId: string;
  @Input()
  trainingPhrases: [];
  @Input()
  similarResponses: [];
  @Output()
  trainAdded = new EventEmitter<any>();
  isVisible: boolean;
  chatbotIntentTrainForm!: FormGroup;
  pageLoading = false;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(
    private fb: FormBuilder,
    private chatbotManagementService: ChatbotManagementService,
    private msg: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.chatbotIntentTrainForm = this.fb.group({
      trainingPhrases: [null, [Validators.required]],
      responseTexts: [null]
    });
    // this.addField();
    // this.chatbotIntentTrainForm.controls.intentName.setValue(this.intentName);
    // this.chatbotIntentUpdateForm.controls.input.setValue(this.input);
    // this.chatbotIntentUpdateForm.controls.response.setValue(this.response);
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.trainAdded.emit();
    this.isVisible = false;
  }

  submitForm() {
    this.pageLoading = true;
    for (const i in this.chatbotIntentTrainForm.controls) {
      this.chatbotIntentTrainForm.controls[i].markAsDirty();
      this.chatbotIntentTrainForm.controls[i].updateValueAndValidity();
    }
    let trainingPhrases: string[] = [];
    trainingPhrases.push(this.chatbotIntentTrainForm.controls.trainingPhrases.value);
    let responseTexts: string[] = [];
    responseTexts.push(this.chatbotIntentTrainForm.controls.responseTexts.value);
    const trainData = {
      intentId: this.intentId,
      trainingPhrases,
      responseTexts
    };
    this.chatbotManagementService.trainIntent(trainData).subscribe(res => {
      this.pageLoading = false;
      this.isVisible = false;
      this.msg.create('success', 'Training phrases added successfully');
      this.trainAdded.emit();
    }, error => {
      console.log(error);
      this.pageLoading = false;
    });
  }

  handleCancel() {
    this.isVisible = false;
  }


  //
  // addField(e?: MouseEvent): void {
  //   if (e) {
  //     e.preventDefault();
  //   }
  //   const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
  //
  //   const control = {
  //     id,
  //     controlInstance: `passenger${id}`
  //   };
  //   const index = this.listOfControl.push(control);
  //   console.log(this.listOfControl[this.listOfControl.length - 1]);
  //   this.chatbotIntentTrainForm.addControl(this.listOfControl[index - 1].controlInstance, new FormControl(null, Validators.required));
  // }
  //
  // removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
  //   e.preventDefault();
  //   if (this.listOfControl.length > 1) {
  //     const index = this.listOfControl.indexOf(i);
  //     this.listOfControl.splice(index, 1);
  //     console.log(this.listOfControl);
  //     this.chatbotIntentTrainForm.removeControl(i.controlInstance);
  //   }
  // }
}
