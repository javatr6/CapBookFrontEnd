import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public pageTitle: string = 'profile';

  constructor() { }

  ngOnInit() {
  }

}
