import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  title = 'FinalYearProject-Frontend-Admin';
  isCollapsed = false;
  nzOffsetBottom = 10;
  public _router: Router;
  username: string;
  pageLoading = false;
  roleSuperadmin = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService
  ) {
    this._router = router;
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    console.log('layout admin component');
    this.username = localStorage.getItem('username');
    if (localStorage.getItem('role') === 'superadmin') {
      this.roleSuperadmin = true;
    }
  }

  logout() {
    this.pageLoading = true;
    this.authService.logout().subscribe(res => {
      localStorage.clear();
      console.log(res);
      this.pageLoading = false;
      this.router.navigate(['/auth/login']).then();
    }, error => {
      this.pageLoading = false;
    });
  }

}
