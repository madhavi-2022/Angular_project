import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-crud1',
  templateUrl: './employee-crud1.component.html',
  styleUrls: ['./employee-crud1.component.css']
})
export class EmployeeCRUD1Component {

  employees:any = [
    { eId: 101, name: 'sanjay', sal: 5000,  gender: 'Male'},
    { eId: 104, name: 'Sahasra', sal:8000,  gender: 'Female' },
    { eId: 115, name: 'Geethika', sal:7000, gender: 'Female'},
    { eId: 102, name: 'Sudheer', sal: 9000, gender: 'Male'},
    { eId: 109, name: 'Madhavi', sal: 9000, gender: 'Female'}
  ]; 
  receiveData(recData:any){
    alert("recData.gen"+recData.gen);
  
    this.employees.push({eId:recData.id,name:recData.name,sal:recData.sal,gender:recData.gen})
  
  }
}
