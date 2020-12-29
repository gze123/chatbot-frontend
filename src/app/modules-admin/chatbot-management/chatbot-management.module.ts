import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotManagementComponent } from './chatbot-management.component';
import { ChatbotGeneralComponent } from './chatbot-general/chatbot-general.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ChatbotLetterComponent } from './chatbot-letter/chatbot-letter.component';
import { ChatbotFaqComponent } from './chatbot-faq/chatbot-faq.component';
import { ChatbotLostAndFoundComponent } from './chatbot-lost-and-found/chatbot-lost-and-found.component';
import {TranslateModule} from '@ngx-translate/core';
import { ChatbotViewAttachmentComponent } from './chatbot-view-attachment/chatbot-view-attachment.component';
import { ChatbotCreateIntentComponent } from './chatbot-create-intent/chatbot-create-intent.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChatbotTrainIntentComponent } from './chatbot-train-intent/chatbot-train-intent.component';
import { ChatbotUpdateIntentComponent } from './chatbot-update-intent/chatbot-update-intent.component';
import { ChatbotManagementTemplateComponent } from './chatbot-management-template/chatbot-management-template.component';



@NgModule({
  declarations: [ChatbotManagementComponent, ChatbotGeneralComponent, ChatbotLetterComponent, ChatbotFaqComponent, ChatbotLostAndFoundComponent, ChatbotViewAttachmentComponent, ChatbotCreateIntentComponent, ChatbotTrainIntentComponent, ChatbotUpdateIntentComponent, ChatbotManagementTemplateComponent],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class ChatbotManagementModule { }
