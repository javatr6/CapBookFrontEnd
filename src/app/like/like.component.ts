import { Component, OnInit } from '@angular/core';
import { IComment } from '../../api/comment';
import { CommentService } from '../../api/comment.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  pageTitle: string = 'Comment';
  comments: IComment[] = [];
  c: IComment = new IComment();
  _listFilter: string;
  constructor(private _commentservice: CommentService) { }

  onSubmit(): void {


    this.createcomment()


  }
  createcomment(): void {
    
    console.log(JSON.stringify(this.c))

    this._commentservice.createcomment(this.c).subscribe(comments => this.c);
    location.reload();
  }


  ngOnInit() {
    this._commentservice.getComments().subscribe(comments =>  {
      this.comments = comments;
    });
  }

  textAreasList: any  =  [];

      addTextarea() {
            this.textAreasList.push('text_area' +  (this.textAreasList.length  +  1));
      }


      removeTextArea(index) {
            this.textAreasList.splice(index,  1);
      }
  setColor(e) {
    var target = e.target,
      status = e.target.classList.contains('btn-success');

    e.target.classList.add(status ? 'btn-default' : 'btn-success');
    e.target.classList.remove(status ? 'btn-success' : 'btn-default');
  }


   /* count:number = 15;
    max : number=this.count + 1;
   min:number = this.count - 1;

 increment = function() {
    if (this.count >= this.max) { return; }
    this.count++;
  };
  decrement = function() {
    if (this.count <= this.min) { return; }
    this.count--;
  }; */
}


