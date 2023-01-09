import { Component, OnInit } from '@angular/core';
import { CommentsserviceService } from 'src/app/services/commentsservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
    
  comments:any=[];
  constructor(private commentsService:CommentsserviceService){}
  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe(response=>{
           this.comments=response;
           console.log(this.comments);
          });
  }

}
