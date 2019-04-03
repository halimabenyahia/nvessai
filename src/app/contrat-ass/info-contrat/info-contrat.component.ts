import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-contrat',
  templateUrl: './info-contrat.component.html',
  styleUrls: ['./info-contrat.component.css']
})
export class InfoContratComponent implements OnInit {

  constructor(private contratService: ContratService,
              private router : Router) { }

  ngOnInit() {
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
