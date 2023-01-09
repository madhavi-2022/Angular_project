import { Component } from '@angular/core';
import * as data from '../../../assets/data/products.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent {

  products = (data as any).default;
  p:any;
  searchText:string='';

  
}