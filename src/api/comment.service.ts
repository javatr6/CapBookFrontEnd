import { Injectable } from '@angular/core';
import { IComment } from './comment';
import { HttpClient } from "@angular/common/http";
import { Observable } from '../../node_modules/rxjs';

@Injectable()

export class CommentService {
    private _productUrl = 'http://localhost:8086/comments ';

    private comment: IComment;
    c: IComment;
    constructor(private _http: HttpClient) {

    }
    getComments(): Observable<IComment[]> {
        return this._http.get<IComment[]>(this._productUrl)
    }
    createcomment(comments: IComment): Observable<IComment> {
        return this._http.post<IComment>(this._productUrl, comments, {})
    }


}
