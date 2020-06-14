import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from './modules.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ModulesModule {
}
