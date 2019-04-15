import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { Chauffeur } from 'src/app/entity/chauffeur';

@Component({
  selector: 'app-form-chauffeur',
  templateUrl: './form-chauffeur.component.html',
  styleUrls: ['./form-chauffeur.component.css']
})
export class FormChauffeurComponent implements OnInit {


  chauffeur : Chauffeur;
  link ;
  errorMessage ;
  constructor(private chauffeurService : ChauffeurService,
              private router : Router) { }
  nameRegex = '[a-zA-Z ]+';
  ngOnInit() {
  }

  add(formulaire : NgForm) {
    this.chauffeurService.addChauffeur(formulaire.value)
     .subscribe(
       (response) => {
        const link='listChauffeur'; 
        this.router.navigate(['Chauffeur/listChauffeur']);
      });
      (error) =>
      {console.log(error);
        this.errorMessage=`probleme de connexion au serveur`}
     
  }


}
