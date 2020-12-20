import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotManagementComponent } from './chatbot-management.component';
import { ChatbotGeneralComponent } from './chatbot-general/chatbot-general.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ChatbotLetterComponent } from './chatbot-letter/chatbot-letter.component';
import { ChatbotFaqComponent } from './chatbot-faq/chatbot-faq.component';
import { ChatbotLostAndFoundComponent } from './chatbot-lost-and-found/chatbot-lost-and-found.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [ChatbotManagementComponent, ChatbotGeneralComponent, ChatbotLetterComponent, ChatbotFaqComponent, ChatbotLostAndFoundComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TranslateModule
  ]
})
export class ChatbotManagementModule { }
