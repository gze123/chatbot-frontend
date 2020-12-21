import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lost-manage',
  templateUrl: './lost-manage.component.html',
  styleUrls: ['./lost-manage.component.css']
})
export class LostManageComponent implements OnInit {

  type = 'lost';

  constructor() { }

  ngOnInit(): void {
  }

}
