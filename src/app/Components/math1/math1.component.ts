import { Component,OnInit } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  templateUrl: './math1.component.html',
  styleUrls: ['./math1.component.css']
})
export class Math1Component {

  
  constructor(private mathObj:MathService){}
  ngOnInit():void{
    console.log(this.mathObj.add(2,3));
    console.log(this.mathObj.mod(25,7));
  }

}
