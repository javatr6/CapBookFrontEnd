import { Component, OnInit } from '@angular/core';
import { OnlineService } from './online.service';
import { Request } from "../request";

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  errorMessage:string;
  online: Request[]=[];
  constructor(private onlineService: OnlineService) { }

  ngOnInit(): void {
    this.onlineService.getUsers()
    .subscribe(request =>{
      this.online= request;
    },
    error => this.errorMessage = <any>error );
  }

}
