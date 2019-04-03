import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { Router } from '@angular/router';
import { Affectation } from 'src/app/entity/affectation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-affectation',
  templateUrl: './info-affectation.component.html',
  styleUrls: ['./info-affectation.component.css']
})
export class InfoAffectationComponent implements OnInit {

  affectation : Affectation[] ;
  constructor(private affectationService : AffectationService,
              private router : Router) { }

  ngOnInit() {
   // this.router
  }

  modifier(formulaire : NgForm){
    this.affectationService.editAffectation(formulaire.value).subscribe(
      (response) =>
      {
        console.log("affectation modifié") ;
        this.router.navigate(['Affectation/listAffectation']);
      }
    );
  }

}
