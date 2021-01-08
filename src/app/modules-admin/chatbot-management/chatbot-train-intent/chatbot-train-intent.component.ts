import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  @Input()
  intentType: string;
  @Input()
  response: string;
  isVisible: boolean;
  chatbotIntentTrainForm!: FormGroup;
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private chatbotManagementService: ChatbotManagementService,
    private msg: NzMessageService,
  ) {
  }

  ngOnInit(): void {
    this.chatbotIntentTrainForm = this.fb.group({
      trainings: this.fb.array([]),
      responses: this.fb.array([])
    });
    const trainingArray = this.chatbotIntentTrainForm.get('trainings') as FormArray;
    const responseArray = this.chatbotIntentTrainForm.get('responses') as FormArray;
    if (this.trainingPhrases.length < 1) {
      this.addTraining();
    } else {
      let trainingData = [];
      this.trainingPhrases.forEach(x => {
        this.addTraining();
        const value = {
          training: x
        };
        trainingData.push(value);
      });
      trainingArray.setValue(trainingData);
    }
    if (this.similarResponses.length < 1) {
      this.addResponse();
    } else {
      let responseData = [];
      this.similarResponses.forEach(x => {
        this.addResponse();
        const value = {
          response: x
        };
        responseData.push(value);
      });
      responseArray.setValue(responseData);
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
    const trainingPhrases: string[] = [];
    this.chatbotIntentTrainForm.controls.trainings.value.forEach(
      x => {
        trainingPhrases.push(x.training);
      }
    );
    const responseTexts: string[] = [];
    this.chatbotIntentTrainForm.controls.responses.value.forEach(
      x => {
        responseTexts.push(x.response);
      }
    );
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

  trainings(): FormArray {
    return this.chatbotIntentTrainForm.get('trainings') as FormArray;
  }

  newTraining(): FormGroup {
    return this.fb.group({
      training: ''
    });
  }

  addTraining() {
    this.trainings().push(this.newTraining());
  }

  removeTraining(i: number) {
    if (i !== 0) {
      this.trainings().removeAt(i);
    }
  }

  responses() {
    return this.chatbotIntentTrainForm.get('responses') as FormArray;
  }

  newResponse(): FormGroup {
    return this.fb.group({
      response: ''
    });
  }

  addResponse() {
    this.responses().push(this.newResponse());
  }

  removeResponse(i: number) {
    if (i !== 0) {
      this.responses().removeAt(i);
    }
  }

}
