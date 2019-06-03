import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-chauffeur',
  templateUrl: './info-chauffeur.component.html',
  styleUrls: ['./info-chauffeur.component.css']
})
export class InfoChauffeurComponent implements OnInit {

  chauffeur : Chauffeur ;
  lien ;
  constructor(private chauffeurService : ChauffeurService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.chauffeurService.getChauffeursById(params.id).subscribe(
          (chauffeur : Chauffeur) =>
          {
            this.chauffeur=chauffeur;
            console.log(chauffeur);
          }
        );
      }
    );
  }

  update(chauffeur) {
            this.chauffeurService.edit(chauffeur).subscribe(
              (response) =>
              {
                console.log("chauffeur modifié");
                this.router.navigate(['/listChauffeur']) ;
              }
             );
          }

}
