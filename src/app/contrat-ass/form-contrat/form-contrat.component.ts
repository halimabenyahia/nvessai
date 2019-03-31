import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.css']
})
export class FormContratComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'montant_contrat': new FormControl(null, Validators.required ),
      'date_deb_contrat' : new FormControl(null,Validators.required ),
      'date_fin_contrat' : new FormControl(null, Validators.required ),
      'num_police': new FormControl(null, [Validators.required , Validators.maxLength(20)])
      
    })
  }

}
