import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lost-item',
  templateUrl: './lost-item.component.html',
  styleUrls: ['./lost-item.component.css']
})
export class LostItemComponent implements OnInit {

  type = 'lost';

  constructor() { }

  ngOnInit(): void {
  }

}
