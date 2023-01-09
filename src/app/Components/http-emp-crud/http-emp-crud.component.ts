import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HttpEmpCrudService } from 'src/app/services/http-emp-crud.service';
import { EmployeeModel } from './httpEmpModel';

@Component({
  selector: 'app-http-emp-crud',
  templateUrl: './http-emp-crud.component.html',
  styleUrls: ['./http-emp-crud.component.css']
})
export class HttpEmpCrudComponent {
  
  httpEmpList:any=[];
  numbers:any;

 
  eid:any;
  fname:any;
  lname:any;
  email:any;
  txtlname:any;
  txtfname:any;
  txtemail:any;
  txteid:any;

  employeeModelObj:EmployeeModel = new EmployeeModel()
  deleid:any;
 
  constructor(private httpempservice:HttpEmpCrudService){}
  ngOnInit(): void {
    
    this.httpempservice.getHttpEmployees().subscribe(response=>{
      this.httpEmpList=response;
      console.log(" this.httpEmpList"+ this.httpEmpList);
    });
    this.f1();
  }
  f1(){
    this.numbers = interval(1000);
    this.numbers.subscribe((val:any)=>console.log(val))
  }
  deleteHttpEmpDetails(deleid:any)
  {
   return this.httpempservice.deleteHttpEmployees(deleid)
     .subscribe(res=>{
      console.log(res);
      alert("employee deleted successfully");
      
     },err=>{
      alert("something went wrong");
     })
     this.httpempservice.getHttpEmployees();
  }
  editHttpEmpDetails(editId:any,editfname:any,editlname:any,editemail:any){
    this.eid=editId;
    this.fname=editfname;
    this.lname=editlname;
    this.email=editemail;
 
  }
  UpdateHttpEmpDetails(updteid:any,updtfname:any,updtlname:any,updtemail:any){
    this.employeeModelObj.id=updteid;
    this.employeeModelObj.first_name=updtfname;
    this.employeeModelObj.last_name=updtlname;
    this.employeeModelObj.email=updtemail;
    this.httpempservice.updateHttpEmployees(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(response=>{
      console.log(response);
    });
  }
 

  postHttpEmpDetails(txteid:any,txtfname:any,txtlname:any,txtemail:any){

    this.employeeModelObj.id=txteid;
    this.employeeModelObj.first_name=txtfname;
    this.employeeModelObj.last_name=txtlname;
    this.employeeModelObj.email=txtemail;
     this.httpempservice.postHttpEmployees(this.employeeModelObj)
     .subscribe(res=>{
      console.log(res);
      alert("employee added successfully");
     },err=>{
      alert("something went wrong");
     })
   
}
}

