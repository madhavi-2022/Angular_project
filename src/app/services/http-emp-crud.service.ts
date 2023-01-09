import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpEmpCrudService {

  constructor(private httpClient:HttpClient) { }

   getHttpEmployees(){
   const url='http://localhost:3000/employees';
   return this.httpClient.get(url)
   }
   postHttpEmployees(data:any){
    const url='http://local host:3000/employees';
    return this.httpClient.post<any>(url,data)
    .pipe(map((response:any)=>{return response}))
    }
    deleteHttpEmployees(id:any){
     
      return this.httpClient.delete<any>('http://localhost:3000/employees/'+id)
      .pipe(map((response:any)=>{return response}))
      
      }
    updateHttpEmployees(data:any,id:any){
      return this.httpClient.put<any>('http://localhost:3000/employees/'+id,data)
      .pipe(map((response:any)=>{return response}))
    }
   
}
