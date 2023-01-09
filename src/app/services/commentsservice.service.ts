import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsserviceService {

  constructor(private httpClient:HttpClient) { }

  getAllComments(){
  const url='https://jsonplaceholder.typicode.com/comments';
    return this.httpClient.get(url);
  }
}
