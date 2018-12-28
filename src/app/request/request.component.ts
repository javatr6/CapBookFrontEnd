import { Component, OnInit } from '@angular/core';
import { RequestService } from "./request.service";
import { Request } from "../request";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  errorMessage:string;
  requests: Request[]=[];
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getUsers()
    .subscribe(request =>{
      this.requests= request;
    },
    error => this.errorMessage = <any>error );
  }

}
