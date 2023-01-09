import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit{
  registerForm:any;

  ngOnInit():void{
    this.registerForm=new FormGroup({
      fullname:new FormControl('Madhavi',
      [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)]),
      username:new FormControl(),
      email:new FormControl(),
      mobileno:new FormControl(
        [Validators.required,
        Validators.maxLength(10)]),
      gender:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        State:new FormControl(),
        pin:new FormControl(),
     
      }),
    });
  }
}
