import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modele',
  templateUrl: './info-modele.component.html',
  styleUrls: ['./info-modele.component.css']
})
export class InfoModeleComponent implements OnInit {

  constructor(private modeleService : ModeleService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire){
    this.modeleService.editModele(formulaire.value).subscribe(
      (response) =>
      {
        console.log("modele modifié") ;
        this.router.navigate(['Modele/listModele']);
      }
    );

  }

}
