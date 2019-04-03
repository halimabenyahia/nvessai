import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';
import { Assurance } from 'src/app/entity/assurance';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.css']
})
export class FormContratComponent implements OnInit {

  assurance : Assurance[];
  constructor(private contratService : ContratService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm) {
    this.contratService.addContrat(formulaire.value).subscribe(
      (response) =>
      {
       // this.contratService.contratAss.push(response) ;
      //  this.form.reset() ;
        this.router.navigate(['Contrat/listContrat']);
      }
    );
  }



}
