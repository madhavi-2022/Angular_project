import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
name:string='Madhavi';
img_url:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Hb-Sfyn5ay1IvqGnZm1VB4Q_YYB95YqX2A&usqp=CAU';
  
flag : boolean =true;

addToCart()
{
  alert("Item Added to cart")
}
 val1 : any =0;
 val2 : any =0;

 msg:string='';

result :number =0;
 addition(a:any,b:any)
 {
  alert(a);
  alert(b);
  this.result=+a + +b
 }


}
