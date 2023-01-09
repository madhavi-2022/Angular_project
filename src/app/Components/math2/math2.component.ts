import { Component,OnInit } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css']
})
export class Math2Component implements OnInit{
   
  mulresult:number=0;
  subresult:number=0;
  

  num1:number=0;
  num2:number=0;

  constructor(private mathobj:MathService){}//DependencyInjection
 ngOnInit():void{
  this.subresult=this.mathobj.sub(50,89);
 }
 multipication(in1:any,in2:any){
  this.mulresult=this.mathobj.mul(this.num1,this.num2);
   }
}


