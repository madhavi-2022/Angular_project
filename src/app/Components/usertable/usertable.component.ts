import { Component , OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {


  users:any[] = [];
                        //object    //class
  constructor(private userService:UserService){}
   
  ngOnInit():void{
      this.users=this.userService.getAllUsers();
 // console.log(this.users);
}
deleteuser(id:any){
  this.users=this.userService.deleteUser(id);
}
 
}
