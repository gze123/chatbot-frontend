import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lost-item-create',
  templateUrl: './lost-item-create.component.html',
  styleUrls: ['./lost-item-create.component.css']
})
export class LostItemCreateComponent implements OnInit {

  type = 'lost';

  constructor() {
  }

  ngOnInit(): void {
  }

}
