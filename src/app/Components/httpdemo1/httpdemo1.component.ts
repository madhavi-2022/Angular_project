import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-httpdemo1',
  templateUrl: './httpdemo1.component.html',
  styleUrls: ['./httpdemo1.component.css']
})
export class Httpdemo1Component implements OnInit {
   users:any=[];
   entries:any=[];
  constructor(private httpClient:HttpClient){}

  fetchHighVolumeData(){
    const url= 'https://api.publicapis.org/entries';
    this.httpClient.get(url).subscribe((responseObject:any)=>{
              this.entries=responseObject.entries;
    })
  }

  ngOnInit(): void {
    this.getUsersJS();
    this.getUsersAngular();   
        }
   getUsersJS(){
   let users=fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json));

          }
getUsersAngular(){
 /* this.httpClient.get('https://jsonplaceholder.typicode.com/users')
                  .subscribe((response)=>{
                    console.log(response);
                  });*/ 
              
  let userObservable= this.httpClient.get('https://jsonplaceholder.typicode.com/users');
      userObservable.subscribe((userData)=>{ 
        console.log(userData) ; 
        this.users= userData;    
      });  
    }
}