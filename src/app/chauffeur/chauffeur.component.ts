import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChauffeurService } from '../services/chauffeur.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

  constructor(private router:Router,
              private chauffeurService : ChauffeurService,) { }
  show = false ;
  nameRegex = '[a-zA-Z ]+';
  errorMessage ;
  ngOnInit() {
    
  }

  add(formulaire : NgForm) {
    this.chauffeurService.addChauffeur(formulaire.value)
     .subscribe(
       (response) => {
        const link='listChauffeur'; 
        this.router.navigate(['/listChauffeur']);
      });
      (error) =>
      {console.log(error);
        this.errorMessage=`probleme de connexion au serveur`}
     
  }



 

}
