import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from './modules.component';
import {RouterModule} from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {NbChatModule, NbSpinnerModule} from '@nebular/theme';


@NgModule({
    declarations: [
        ModulesComponent,
        ChatbotComponent
    ],
    exports: [
        ChatbotComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NbChatModule,
        NbSpinnerModule
    ]
})
export class ModulesModule {
}
