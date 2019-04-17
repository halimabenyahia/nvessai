import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModeleService } from 'src/app/services/modele.service';
import { Router } from '@angular/router';
import { Marque } from 'src/app/entity/marque';

@Component({
  selector: 'app-form-modele',
  templateUrl: './form-modele.component.html',
  styleUrls: ['./form-modele.component.css']
})
export class FormModeleComponent implements OnInit {


  marque : Marque[] ;
  constructor(private modeleService : ModeleService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.modeleService.addModele(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['Modele/listModele']);
      }
    );
  }

}
