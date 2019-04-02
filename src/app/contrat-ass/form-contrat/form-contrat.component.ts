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

  form: FormGroup= new FormGroup({})
  assurance : Assurance[];
  constructor(private contratService : ContratService,
              private router : Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      'montant_contrat': new FormControl(null, Validators.required ),
      'date_deb_contrat' : new FormControl(null,Validators.required ),
      'date_fin_contrat' : new FormControl(null, Validators.required ),
      'num_police': new FormControl(null, Validators.required)
      
    })
  }

  add(formulaire : NgForm) {
    this.contratService.addContrat(formulaire.value).subscribe(
      (response) =>
      {
       // this.contratService.contratAss.push(response) ;
      //  this.form.reset() ;
        this.router.navigate(['listContrat']);
      }
    );
  }



}
