import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-layout-student',
  templateUrl: './layout-student.component.html',
  styleUrls: ['./layout-student.component.css']
})
export class LayoutStudentComponent implements OnInit {
  title = 'FinalYearProject-Frontend';
  isCollapsed = false;
  nzOffsetBottom = 10;
  public _router: Router;
  studentAccess: boolean;
  username: string;
  pageLoading = false;

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
    this.studentAccess = this._router.url.includes('student');
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.pageLoading = true;
    this.authService.logout().subscribe(res => {
      localStorage.clear();
      console.log(res);
      this.pageLoading = false;
      this.router.navigate(['/auth/login']).then(r => location.reload());
    }, error => {
      this.pageLoading = false;
    });
  }

  openChatbot(): void {
    console.log(this._router.url);
    console.log(this.nzOffsetBottom);
  }
}
