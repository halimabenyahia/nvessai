import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Affectation } from 'src/app/entity/affectation';
import { AffectationService } from 'src/app/services/affectation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-affectation',
  templateUrl: './form-affectation.component.html',
  styleUrls: ['./form-affectation.component.css']
})
export class FormAffectationComponent implements OnInit {


  form: FormGroup= new FormGroup({})
  affectation : Affectation [];
  constructor(private affectationService : AffectationService,
              private router : Router) { }

  ngOnInit() {
   // this.form=new FormGroup({
    //  'des_affectation': new FormGroup(null, Validators.required )
   // })
  }

  add(formulaire : NgForm){
    this.affectationService.addAffectation(formulaire.value).subscribe(
      (response) =>
      {this.router.navigate(['Affectation/listAffectation']);}
    
    );
  }



}
