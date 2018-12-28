import { Component, OnInit } from '@angular/core';
import { OnlineService } from '../online/online.service';
import { RequestService } from '../request/request.service';


@Component({
  selector: 'pm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [OnlineService,RequestService]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
