import { Component,OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-service',
  templateUrl: './emp-service.component.html',
  styleUrls: ['./emp-service.component.css']
})
export class EmpServiceComponent {

  empData:any[] = [];

  employees1:any = [
    { eId: 101, name: 'sanjay', sal: 5000,Gender:'Male'},
    { eId: 104, name: 'Sahasra', sal:8000,Gender:'Female' },
    { eId: 115, name: 'Geethika', sal:7000,Gender:'Female'}
    
  ]; 
 


//object    //class
constructor(private empService:EmployeeService){}

ngOnInit():void{
//this.empData=this.empService.getAllEmployees();
// console.log(this.users);

}
getAllEmployees(){
  this.empData=this.empService.getAllEmployees();
}
getMaleEmployees()
{

  this.empData=this.empService.getSerMaleEmployees();
}
getFeMaleEmployees()
{

  this.empData=this.empService.getSerFeMaleEmployees();
}

}

