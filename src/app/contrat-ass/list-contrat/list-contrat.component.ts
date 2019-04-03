import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { ContratAssurance } from 'src/app/entity/contrat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  contrats : ContratAssurance[];
  constructor(private contratService : ContratService,
              private router : Router) { }

  ngOnInit() {
    this.contratService.getContratAss()
    .subscribe(
      (value : any[]) =>
      {
        this.contrats=value ;
        console.log(this.contrats);
      }
    );
  }

  edit(id_contrat){
    this.router.navigate(['Contrat/editContrat',id_contrat]);
  }

  delete(id_contrat){
    this.contratService.supprimer(id_contrat).subscribe(
      (response) =>
      {
        console.log("contrat supprimé");
        this.router.navigate(['Contrat/listContrat']);
      }
    );
  }

}
