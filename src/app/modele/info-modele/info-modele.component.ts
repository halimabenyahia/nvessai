import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modele } from 'src/app/entity/modele';

@Component({
  selector: 'app-info-modele',
  templateUrl: './info-modele.component.html',
  styleUrls: ['./info-modele.component.css']
})
export class InfoModeleComponent implements OnInit {

  modele :Modele ;
  constructor(private modeleService : ModeleService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.modeleService.getModeleById(params.id).subscribe(
          (modele : Modele) =>
          {
            this.modele=modele;
            console.log(modele) ;
          }
        );
      }
    );
  }

  modifier(modele){
    this.modeleService.editModele(modele).subscribe(
      (response) =>
      {
        console.log("modele modifié") ;
        this.router.navigate(['Modele/listModele']);
      }
    );

  }

}
