import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure:false
})
export class MysortPipe implements PipeTransform {

  transform(arr:number[],){

     return arr.sort((a :any, b:any) =>a.eId-b.eId)

  }

}
