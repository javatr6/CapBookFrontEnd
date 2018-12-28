import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {

  public pageTitle: string = 'birthdays';

  constructor() { }

  ngOnInit() {
    
  }

}
