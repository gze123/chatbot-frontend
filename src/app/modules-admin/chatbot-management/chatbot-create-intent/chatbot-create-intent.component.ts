import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';

@Component({
  selector: 'app-chatbot-create-intent',
  templateUrl: './chatbot-create-intent.component.html',
  styleUrls: ['./chatbot-create-intent.component.css']
})
export class ChatbotCreateIntentComponent implements OnInit {

  pageLoading = false;
  imageInputExtra: string;
  chatbotIntentForm!: FormGroup;
  fileList: UploadFile[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private chatbotService: ChatbotManagementService
  ) {
  }

  ngOnInit(): void {
    this.chatbotIntentForm = this.fb.group({
      intentName: [null, [Validators.required]],
      input: [null, [Validators.required]],
      response: [null, [Validators.required]],
      attachments: [null]
    });
  }

  submitForm(): void {
    this.pageLoading = true;
    const formData = new FormData();
    for (const i in this.chatbotIntentForm.controls) {
      this.chatbotIntentForm.controls[i].markAsDirty();
      this.chatbotIntentForm.controls[i].updateValueAndValidity();
    }
    formData.append('intentName', this.chatbotIntentForm.controls['intentName'].value);
    formData.append('input', this.chatbotIntentForm.controls['input'].value);
    formData.append('response', this.chatbotIntentForm.controls['response'].value);
    formData.append('attachments', this.chatbotIntentForm.controls['attachments'].value);

    formData.forEach(x => console.log(x));
    this.chatbotService.createIntent(formData).subscribe(res => {
      this.pageLoading = false;
      location.reload();
    }, error => {
      this.pageLoading = false;
    });
  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.chatbotIntentForm.patchValue({
      attachments: file
    });
    this.chatbotIntentForm.get('attachments').updateValueAndValidity();
    console.log(this.chatbotIntentForm);
  }
}
