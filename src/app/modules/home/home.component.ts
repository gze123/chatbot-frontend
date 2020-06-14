import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          // displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          // displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }

  ngOnInit(): void {
  }
}
