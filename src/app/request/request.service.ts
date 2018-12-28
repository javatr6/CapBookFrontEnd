import { Injectable } from "../../../node_modules/@angular/core";
import { Request } from "../request";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from '../../../node_modules/rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestService{
    private userUrl: string= "../assets/users.json";
    constructor(private http: HttpClient){}
    getUsers(): Observable<Request[]>{
        return this.http.get<Request[]>(this.userUrl)
        .do(data => console.log('All: '+JSON.stringify(data))).catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse){
       // console.error(err.message);
        return Observable.throw(err.message);
    }
}