import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entity/user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  user : User ;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      (user : User) =>
      {
        this.user=user ;
      }
    );
  }

  connexion(){
    
  }

}
