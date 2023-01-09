import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  num : number = 10;
  flag:boolean=false;
  
  cars:String[] =["Morris",'Hyndai','Tata','Maruthi','Toyota'];
   states:any[]=[
    {text:'Andhra',val:'AP'},
    {text:'Madhya',val:'MP'},
    {text:'UttarPradesh',val:'UP'},
    {text:'Karnataka',val:'KA'},
    {text:'Kerala',val:'KL'}
   ];
   selectedState:string = 'AP';

   employees:any = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];
  getNewemployees(){
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
      { eId: 105, name: 'Madhavi', sal: 9000, gender: 'male' }
    ];

  }
  trackByEmpId(employee:any){
    return employee.eId;
  }
 // datanumber:any=prompt("enter a number");
  datanumber:any = new Date().getDay();
}
