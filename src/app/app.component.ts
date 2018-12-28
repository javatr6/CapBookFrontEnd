import { Component } from '@angular/core';
import { OnlineComponent } from './online/online.component';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
  pageTitle: string=''; 
}
