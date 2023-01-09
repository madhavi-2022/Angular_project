import { Component } from '@angular/core';

@Component({
  selector: 'app-formcompnt',
  templateUrl: './formcompnt.component.html',
  styleUrls: ['./formcompnt.component.css']
})
export class FormcompntComponent {
user :any=[];
ngOnInit(){
  this.user={fname:'madhavi',username:'chennupati'}
}

  submitMyForm(myForm:any){
    console.log(myForm);
  }
 /* Locationlist:Location[] = [
    new Location("1", "Hyderabad"),
    new Location('2', 'Bangalore'),
    new Location('3', 'Visakhapatnam')
  ];*/
}
/*export class Location {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}*/
