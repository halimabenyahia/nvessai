import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entity/user';
import { Router } from '@angular/router';
import { logging } from 'protractor';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  user : User ;
  
  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit() {
    
  }

  connexion(login,mdp){
    this.userService.getetatUser(login,mdp).subscribe(
      (response) =>
      {
        console.log(response);
        if (response)
        {
          this.router.navigate(['']);
        }
        else {
          this.router.navigate(['login']);
        }
      }
    );
    
    
  }

}
