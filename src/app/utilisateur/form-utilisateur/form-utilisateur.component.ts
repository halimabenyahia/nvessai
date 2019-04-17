import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-utilisateur',
  templateUrl: './form-utilisateur.component.html',
  styleUrls: ['./form-utilisateur.component.css']
})
export class FormUtilisateurComponent implements OnInit {

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.userService.addUser(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/utilisateurs/listUtilisateur']);
      }
    );
  }

}
