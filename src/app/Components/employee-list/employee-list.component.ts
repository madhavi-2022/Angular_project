import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  inputs:['employees']
})
export class EmployeeListComponent {
 
  employees:any=[];
}
