import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public pageTitle: string = 'groups';

  constructor() { }

  ngOnInit() {
  }

}
