import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public pageTitle: string = 'messages';

  constructor() { }

  ngOnInit() {
  }

}
