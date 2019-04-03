import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { TypeVehicule } from 'src/app/entity/typeVehicule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-type-v',
  templateUrl: './form-type-v.component.html',
  styleUrls: ['./form-type-v.component.css']
})
export class FormTypeVComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  typeVehicule: TypeVehicule[];
  errorMessage ;
  constructor(private typeVehiculeService : TypeVehiculeService,
              private router : Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_typeVehicule': new FormControl(null, Validators.required  )
    })
  }

  add(formulaire : NgForm){
    this.typeVehiculeService.addTypeV(formulaire.value)
    .subscribe(
      (response) =>
      {//this.typeVehiculeService.typeVehicule.push(response);
        this.form.reset();
        this.router.navigate(['TypeV/listTypeV']);}
    
 // (error) =>
 // {console.log(error);
  //  this.errorMessage=`probleme de connexion au serveur`}
    );
  }

}
