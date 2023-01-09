import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryproductdetails',
  templateUrl: './queryproductdetails.component.html',
  styleUrls: ['./queryproductdetails.component.css']
})
export class QueryproductdetailsComponent implements OnInit{
   prod:any;
  constructor(private activatedRoute:ActivatedRoute,
               private httpClient:HttpClient){}
    
    ngOnInit(): void {
      
      const url='https://fakestoreapi.com/products'
      this.activatedRoute.queryParams.subscribe(queryparams=>
        {
          console.log(queryparams);
          this.prod=queryparams;
        })
    }
   
}
