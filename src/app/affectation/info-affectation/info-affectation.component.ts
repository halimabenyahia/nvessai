import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Affectation } from 'src/app/entity/affectation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-affectation',
  templateUrl: './info-affectation.component.html',
  styleUrls: ['./info-affectation.component.css']
})
export class InfoAffectationComponent implements OnInit {

  affectation : Affectation ;
  constructor(private affectationService : AffectationService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.affectationService.getAffectationById(params.id).subscribe(
          (affectation : Affectation)=>
          {
            this.affectation=affectation ;
            console.log(affectation) ;
          }
        );
      }
    );

   
  } 
 
  modifier(affectation){
    this.affectationService.edit(affectation).subscribe(
      (response) =>
      {
        console.log("affectation modifié") ;
        this.router.navigate(['/listAffectation']);
      }
    );
  }

}
