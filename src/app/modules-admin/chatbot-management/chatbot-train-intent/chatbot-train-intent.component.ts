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
  trainingPhrases: string[];
  @Input()
  similarResponses: string[];
  @Output()
  trainAdded = new EventEmitter<any>();
  isVisible: boolean;
  chatbotIntentTrainForm!: FormGroup;
  pageLoading = false;
  listOfTrainingControl: Array<{ id: number; controlInstance: string }> = [];
  listOfResponseControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(
    private fb: FormBuilder,
    private chatbotManagementService: ChatbotManagementService,
    private msg: NzMessageService,
  ) {
  }

  ngOnInit(): void {
    this.chatbotIntentTrainForm = this.fb.group({});
    if (this.trainingPhrases.length < 1) {
      this.addField();
    }
    if (this.similarResponses.length < 1) {
      this.addResponseField();
    }
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
    let trainingPhrasesControlInstance = [];
    let trainingPhrases: string[] = [];
    this.listOfTrainingControl.forEach(x => {
      trainingPhrasesControlInstance.push(x.controlInstance);
    });
    trainingPhrasesControlInstance.forEach(x => {
      trainingPhrases.push(this.chatbotIntentTrainForm.controls[x].value);
    });
    let responsePhrasesControlInstance = [];
    let responseTexts: string[] = [];
    this.listOfResponseControl.forEach(x => {
      responsePhrasesControlInstance.push(x.controlInstance);
    });
    responsePhrasesControlInstance.forEach(x => {
      responseTexts.push(this.chatbotIntentTrainForm.controls[x].value);
    });
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

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfTrainingControl.length > 0 ? this.listOfTrainingControl[this.listOfTrainingControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `training${id}`
    };
    const index = this.listOfTrainingControl.push(control);
    this.chatbotIntentTrainForm.addControl(
      this.listOfTrainingControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfTrainingControl.length > 1) {
      const index = this.listOfTrainingControl.indexOf(i);
      this.listOfTrainingControl.splice(index, 1);
      console.log(this.listOfTrainingControl);
      this.chatbotIntentTrainForm.removeControl(i.controlInstance);
    }
  }

  addResponseField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfResponseControl.length > 0 ? this.listOfResponseControl[this.listOfResponseControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `response${id}`
    };
    const index = this.listOfResponseControl.push(control);
    this.chatbotIntentTrainForm.addControl(
      this.listOfResponseControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeResponseField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfResponseControl.length > 1) {
      const index = this.listOfResponseControl.indexOf(i);
      this.listOfResponseControl.splice(index, 1);
      this.chatbotIntentTrainForm.removeControl(i.controlInstance);
    }
  }
}
