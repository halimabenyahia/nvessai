import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ModeleService } from 'src/app/services/modele.service';
import { Router } from '@angular/router';
import { Marque } from 'src/app/entity/marque';

@Component({
  selector: 'app-form-modele',
  templateUrl: './form-modele.component.html',
  styleUrls: ['./form-modele.component.css']
})
export class FormModeleComponent implements OnInit {

 // form: FormGroup = new FormGroup({});
  marque : Marque[] ;
  constructor(private modeleService : ModeleService,
              private router : Router) { }

  ngOnInit() {
  //  this.form=new FormGroup({
   //   'marque': new FormControl(null, Validators.required ),
    //  'des_modele': new FormControl(null, Validators.required , Validators.pattern('^[az-AZ]')])
   // })
  }

  add(formulaire : NgForm){
    this.modeleService.addModele(formulaire.value).subscribe(
      (response) =>
      {
       // this.modeleService.modele.push(response) ;
      //  this.formulaire.reset() ;
        this.router.navigate(['listModele']);
      }
    );
  }

}
