import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent {

  users:any[] = [];
  constructor(private userService:UserService){}
  
  ngOnInit():void{
    this.users=this.userService.getAllUsers();
  }
  refresh() {
    this.users = this.userService.getUpdatedData();
  }
}
