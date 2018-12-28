import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public pageTitle: string = 'settings';


  constructor() { }

  ngOnInit() {
  }

}
