import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from './modules.component';
import {RouterModule} from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {NbChatModule, NbSpinnerModule} from '@nebular/theme';
import { ProfileComponent } from './profile/profile.component';
import {SharedModulesModule} from '../shared/shared-modules/shared-modules.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
        ModulesComponent,
        ChatbotComponent,
        ProfileComponent
    ],
    exports: [
        ChatbotComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    NbChatModule,
    NbSpinnerModule,
    SharedModulesModule,
    NgZorroAntdModule,
    TranslateModule
  ]
})
export class ModulesModule {
}
