import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../entity/user';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

 
  user : User ;
  username : string ;
  password : string ;
  
  constructor(private authentificationService : AuthentificationService,
              private router : Router) { }

  ngOnInit() {
  }
/*
  connexion(login,mdp){
    this.userService.getetatUser(login,mdp).subscribe(
      (response) =>
      {
        console.log(response);
        if (response)
        {
          this.router.navigate(['/header']);
        }
        else {
          console.log("login ou mot de passe incorrecte");
         // this.router.navigate(['login']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  */

 login(form : NgForm){
    console.log(form) ;
    this.authentificationService.login(form.value).subscribe(
      (response) =>
      {
        console.log(response);
        const token = response['token'] ;
        localStorage.setItem('token',token);
        localStorage.setItem('username' ,response['username']);
        localStorage.setItem('role',response['roles']);
        this.router.navigate(['/acceuil']);
      },
      (error) =>{
        console.log(error);
      }
      
    );
    
  }
  

}
