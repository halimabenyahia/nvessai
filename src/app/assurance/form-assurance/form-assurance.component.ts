import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm } from '@angular/forms';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Router } from '@angular/router';
import { Assurance } from 'src/app/entity/assurance';

@Component({
  selector: 'app-form-assurance',
  templateUrl: './form-assurance.component.html',
  styleUrls: ['./form-assurance.component.css']
})
export class FormAssuranceComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  assurance : Assurance[] ;
  constructor(private assuranceService : AssuranceService,
              private router : Router) { }

  ngOnInit() {
  
  }

  add(formulaire : NgForm){
    this.assuranceService.addAssurance(formulaire.value).subscribe(
      (response) =>
      {
        console.log("assurance ajouté") ;
        this.router.navigate(['Assurance/listAssurance']) ;
      }
    );
  }

  

}
