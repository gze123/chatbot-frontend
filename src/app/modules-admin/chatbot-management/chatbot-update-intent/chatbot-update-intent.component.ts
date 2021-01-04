import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadFile} from 'ng-zorro-antd/upload';
import {ChatbotManagementService} from '../../../services/chatbot-management.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-chatbot-update-intent',
  templateUrl: './chatbot-update-intent.component.html',
  styleUrls: ['./chatbot-update-intent.component.css']
})
export class ChatbotUpdateIntentComponent implements OnInit {

  @Input()
  intentName: string;
  @Input()
  input: string;
  @Input()
  response: string;
  @Input()
  attachments: [];
  @Input()
  id: string;
  @Output()
  reloadTable = new EventEmitter();
  attachmentList: UploadFile[] = [];
  isVisible: boolean;
  chatbotIntentUpdateForm!: FormGroup;
  pageLoading = false;

  constructor(
    private fb: FormBuilder,
    private chatbotManagementService: ChatbotManagementService,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    this.chatbotIntentUpdateForm = this.fb.group({
      intentName: [null, [Validators.required]],
      input: [null, [Validators.required]],
      response: [null, [Validators.required]],
      attachments: [null]
    });
    this.chatbotIntentUpdateForm.controls.intentName.setValue(this.intentName);
    this.chatbotIntentUpdateForm.controls.input.setValue(this.input);
    this.chatbotIntentUpdateForm.controls.response.setValue(this.response);
  }

  showModal() {
    this.isVisible = true;
  }

  closeModel() {
    this.isVisible = false;
  }

  submitForm() {
    this.pageLoading = true;
    this.chatbotIntentUpdateForm.patchValue({
      attachments: this.attachmentList
    });
    const formData = new FormData();
    for (const i in this.chatbotIntentUpdateForm.controls) {
      this.chatbotIntentUpdateForm.controls[i].markAsDirty();
      this.chatbotIntentUpdateForm.controls[i].updateValueAndValidity();
    }
    formData.append('id', this.id);
    formData.append('intentName', this.chatbotIntentUpdateForm.controls.intentName.value);
    formData.append('input', this.chatbotIntentUpdateForm.controls.input.value);
    formData.append('response', this.chatbotIntentUpdateForm.controls.response.value);
    this.attachmentList.forEach((file: any) => {
      formData.append('attachments', file);
    });
    this.chatbotManagementService.updateIntent(formData).subscribe(res => {
      this.pageLoading = false;
      this.msg.success('Intent updated successfully');
    }, error => {
      console.log(error);
      this.msg.error(error.error.error);
      this.pageLoading = false;
    });
  }

  deleteFile(filePath: string) {
    const id = this.id;
    const deleteFile = {id, filePath};
    this.chatbotManagementService.deleteFileIntent(deleteFile).subscribe(res => {
    }, err => {
    });
  }

  viewFile(attachment: string) {
    window.open(attachment, '_blank');
  }

  beforeUploadFile = (file: UploadFile): boolean => {
    this.attachmentList = this.attachmentList.concat(file);
    return false;
  }

  handleCancel() {
    this.isVisible = false;
  }
}
