import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.css']
})
export class LostAndFoundComponent implements OnInit {

  isVisible = false;
  pageLoading = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
