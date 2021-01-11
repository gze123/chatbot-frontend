import {Component, OnInit} from '@angular/core';
import Typewriter from 't-writer.js';

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
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'white'
    });

    writer
      .type('A website built for student\'s convenience')
      .rest(500)
      .start();
  }

  forgotPasswordVisible(event: any) {
      this.forgotPasswordFormVisible = event;
  }

}
