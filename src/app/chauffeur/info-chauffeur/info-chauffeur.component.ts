import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-chauffeur',
  templateUrl: './info-chauffeur.component.html',
  styleUrls: ['./info-chauffeur.component.css']
})
export class InfoChauffeurComponent implements OnInit {

  chauffeur : Chauffeur [] ;
  lien ;
  constructor(private chauffeurService : ChauffeurService,
              private router : Router) { }

  ngOnInit() {
  }

  update(formulaire : NgForm) {
    return this.chauffeurService.edit(formulaire).subscribe(
      (response) =>
      {
        console.log("chauffeur modifié");
        //const lien='listChauffeur'
        this.router.navigate(['Chauffeur/listChauffeur']) ;
      }
     );
  }

}
