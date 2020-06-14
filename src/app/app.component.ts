import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth = false;
  title = 'FinalYearProject-Frontend';
  isCollapsed = false;
  nzOffsetBottom = 10;
  public _router: Router;

  constructor(
    translate: TranslateService,
    router: Router
  ) {
    this._router = router;
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    if (!localStorage.getItem('jwtToken')) {
      this._router.navigate(['/auth/login']).then();
    }

  }

  openChatbot(): void {
    console.log(this._router.url);
    console.log(this.nzOffsetBottom);
  }
}
