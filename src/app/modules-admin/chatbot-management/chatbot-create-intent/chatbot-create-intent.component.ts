import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
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
    private chatbotService: ChatbotManagementService,
    private nzModalService: NzModalService
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
    this.fileList.forEach((file: any) => {
      formData.append('attachments', file);
    });
    formData.forEach(x => console.log(x));
    this.chatbotService.createIntent(formData).subscribe(res => {
      this.pageLoading = false;
      this.nzModalService.success({
        nzTitle: 'Intent created successfully',
        nzOnOk: () => {
          location.reload();
        }
      });
    }, error => {
      this.pageLoading = false;
    });
  }

  beforeUploadFile = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.chatbotIntentForm.patchValue({
      attachments: file
    });
    this.chatbotIntentForm.get('attachments').updateValueAndValidity();
  }
}
