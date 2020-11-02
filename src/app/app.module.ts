import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {en_US, NgZorroAntdModule, NZ_I18N, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.route';
import {AuthenticationModule} from './authentication/authentication.module';
import {ModulesAdminComponent} from './modules-admin/modules-admin.component';
import {LayoutAdminComponent} from './layout-admin/layout-admin.component';
import {LayoutStudentComponent} from './layout-student/layout-student.component';
import {LayoutAuthComponent} from './layout-auth/layout-auth.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/user.reducer';
import {TokenInterceptor} from './interceptor/token-interceptor.interceptor';

registerLocaleData(en);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ModulesAdminComponent,
    LayoutAdminComponent,
    LayoutStudentComponent,
    LayoutAuthComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(APP_ROUTES),
    AuthenticationModule,
    StoreModule.forRoot({user: reducer})
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
