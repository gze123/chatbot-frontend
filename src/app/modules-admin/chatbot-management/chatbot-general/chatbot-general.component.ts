import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-chatbot-general',
  templateUrl: './chatbot-general.component.html',
  styleUrls: ['./chatbot-general.component.css']
})
export class ChatbotGeneralComponent implements OnInit {

  chatbotIntentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
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

}
