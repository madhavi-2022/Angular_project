import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeeCRUDComponent {

viewEmployee: any = {};
editEmployee:any;
 index1:any;
  eid:any;
  name:any;
  sal:any;
  gen:any;
  searchText='';
  employee:any;



  employees:any = [
    { eId: 101, name: 'sanjay', sal: 5000,Gender:'Male'},
    { eId: 104, name: 'Sahasra', sal:8000,Gender:'Female' },
    { eId: 115, name: 'Geethika', sal:7000,Gender:'Female'},
    { eId: 102, name: 'Sudheer', sal: 9000,Gender:'Male'},
    { eId: 109, name: 'Madhavi', sal: 9000,Gender:'Female'}
  ]; 
  
 addEmployee(eid:any,txtname:any,txtsal:any,txtgen:any){
    if(eid!=null )
    {
   this.employees.push({eId:eid,name:txtname,sal:txtsal,Gender:txtgen})
    }
    else{
      alert("enter values into fields");
    }
    }
  
    editEmployeeData(emp:any) 
    {
      this.editEmployee = emp;
      alert(this.editEmployee.eId)
    }

     deleteRecord(index1:any){
      
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.employees.splice(index1,1);  
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
      
     }
     
}
