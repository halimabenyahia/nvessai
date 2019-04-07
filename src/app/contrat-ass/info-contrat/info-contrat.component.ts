import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Assurance } from 'src/app/entity/assurance';
import { ContratAssurance } from 'src/app/entity/contrat';

@Component({
  selector: 'app-info-contrat',
  templateUrl: './info-contrat.component.html',
  styleUrls: ['./info-contrat.component.css']
})
export class InfoContratComponent implements OnInit {

  assurance : Assurance ;
  contrat : ContratAssurance ;
  constructor(private contratService: ContratService,
              private assuranceService : AssuranceService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>
      {
        console.log(params) ;
        this.contratService.getContratAssById(params.id).subscribe(
          (contrat : ContratAssurance)=>
          {
            this.contrat=contrat;
            console.log(contrat) ;
          }
        );
      }
    );


    this.assuranceService.getAssurrance().subscribe(
      (assurance : Assurance) =>
      {
        this.assurance=assurance ;
      }
    );


  }

  modifier(contrat){
    this.contratService.editContrat(contrat).subscribe(
      (response) =>
      {
        console.log("contrat modifié") ;
        this.router.navigate(['Contrat/listContrat']);
      }
    );
  }

}
