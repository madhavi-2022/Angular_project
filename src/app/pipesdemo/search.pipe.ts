import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],searchtext:string){
    if(!items)
    return[];
    if(!searchtext)
    return items;

    searchtext  = searchtext.toLowerCase();
    return items.filter((item)=>{
      return JSON.stringify(item).toLowerCase().includes(searchtext)
    })
    
  }

}
