import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Assurance } from 'src/app/entity/assurance';

@Component({
  selector: 'app-info-contrat',
  templateUrl: './info-contrat.component.html',
  styleUrls: ['./info-contrat.component.css']
})
export class InfoContratComponent implements OnInit {

  assurance : Assurance[] ;
  constructor(private contratService: ContratService,
              private assuranceService : AssuranceService,
              private router : Router) { }

  ngOnInit() {
    this.assuranceService.getAssurrance().subscribe(
      (value : any[])=>
      {this.assurance=value;}
    );
  }

  modifier(formulaire){
    this.contratService.editContrat(formulaire.value).subscribe(
      (response) =>
      {
        console.log("contrat modifié") ;
        this.router.navigate(['Contrat/listContrat']);
      }
    );

  }

}
