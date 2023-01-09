import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  maleEmpl:any[]=[];

  employees:any = [
    { eId: 101, name: 'sanjay', sal: 5000,Gender:'male'},
    { eId: 104, name: 'Sahasra', sal:8000,Gender:'Female' },
    { eId: 115, name: 'Geethika', sal:7000,Gender:'Female'},
    { eId: 102, name: 'Sudheer', sal: 9000,Gender:'male'},
    { eId: 103, name: 'Sravani', sal: 9000,Gender:'Female'},
    { eId: 105, name: 'laxmi', sal: 9000,Gender:'Female'},
    { eId: 107, name: 'Harish', sal: 9000,Gender:'male'},
    { eId: 106, name: 'Jagadeesh', sal: 9000,Gender:'male'},
    { eId: 111, name: 'Hrithvik', sal: 9000,Gender:'male'}
  ]; 
  
    getAllEmployees(){
      return this.employees;
    }
    getSerMaleEmployees(){
      const maleData=this.employees.filter((person:any)=> person.Gender == 'male');
      return maleData;


    }
    getSerFeMaleEmployees(){
      const femaleData=this.employees.filter((person:any)=> person.Gender == 'Female');
      return femaleData;
    }
  
}


function tolowerCase(Gender: any) {
  throw new Error('Function not implemented.');
}

