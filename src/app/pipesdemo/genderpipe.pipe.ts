import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';
import { EmployeeCRUDComponent } from '../Components/employeecrud/employeecrud.component';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(input:string,gender:string){
   if(gender.toLowerCase()=='male')
   {
    return 'Mr.'+ input ;
   }
   else {
    return 'miss.' + input;
   }

}

}

