import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
  
 
})
export class EmployeeAddComponent{
  @Output() addevent=new EventEmitter();


  addEmployee(id:any,name:any,sal:any,gen:any){
    
    this.addevent.emit({id,name,sal,gen});
  }
 
}
