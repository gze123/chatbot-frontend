import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HOME_ROUTES} from './home.route';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {ModulesModule} from '../modules.module';


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(HOME_ROUTES),
        TranslateModule,
        NgZorroAntdModule,
        FormsModule,
        ModulesModule
    ]
})
export class HomeModule {
}
