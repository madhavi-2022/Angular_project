import { Pipe, PipeTransform } from '@angular/core';
import { mergeScan } from 'rxjs';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input : number){

   // return 100 - input.length;
   const rem  = input%10;
    let res = '';
    if(rem===1){
      res = input + 'st';
    }else if(rem===2){
      res= input +'nd'
    }else if(rem===3){
      res=input+'rd';
    }else{
      res=input +'th';
    }
    return res;
    }
    
  }


