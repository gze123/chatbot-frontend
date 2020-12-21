import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found-manage',
  templateUrl: './found-manage.component.html',
  styleUrls: ['./found-manage.component.css']
})
export class FoundManageComponent implements OnInit {

  type = 'found';

  constructor() { }

  ngOnInit(): void {
  }

}
