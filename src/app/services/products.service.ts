import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private prodHttpClient:HttpClient) { }
 
  getProducts(){
    const  url = "https://fakestoreapi.com/products/";
    return this.prodHttpClient.get(url);
  }
  getProductDetails(id:number) {
 
  const  url = "https://fakestoreapi.com/products/"+id;

  return this.prodHttpClient.get(url);
  }
}
