import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LostAndFoundComponent} from './lost-and-found.component';
import {RouterModule} from '@angular/router';
import {LOST_AND_FOUND_ROUTES} from './lost-and-found.route';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzListModule} from 'ng-zorro-antd/list';
import {ReactiveFormsModule} from '@angular/forms';
import {LostAndFoundAdminModule} from "../../modules-admin/lost-and-found-admin/lost-and-found-admin.module";
import { FoundItemComponent } from './found-item/found-item.component';
import { LostItemCreateComponent } from './lost-item-create/lost-item-create.component';
import { LostAndFoundTemplateComponent } from './lost-and-found-template/lost-and-found-template.component';
import { LostItemComponent } from './lost-item/lost-item.component';


@NgModule({
    declarations: [LostAndFoundComponent, FoundItemComponent, LostItemCreateComponent, LostAndFoundTemplateComponent, LostItemComponent],
    exports: [
        LostAndFoundTemplateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(LOST_AND_FOUND_ROUTES),
        TranslateModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        NzListModule,
        LostAndFoundAdminModule
    ]
})
export class LostAndFoundModule {
}
