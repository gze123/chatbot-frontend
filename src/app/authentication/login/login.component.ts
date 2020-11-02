import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  index = 0;
  forgotPasswordFormVisible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  forgotPasswordVisible(event: any) {
      this.forgotPasswordFormVisible = event;
      console.log(this.forgotPasswordFormVisible);
  }

}
