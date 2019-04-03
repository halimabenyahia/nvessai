import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm } from '@angular/forms';
import { BoiteService } from 'src/app/services/boite.service';
import { Router } from '@angular/router';
import { Boite } from 'src/app/entity/boite';

@Component({
  selector: 'app-form-boite',
  templateUrl: './form-boite.component.html',
  styleUrls: ['./form-boite.component.css']
})
export class FormBoiteComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  boite : Boite[]= [] ;
  link ;
  constructor(private boiteService : BoiteService,
              private router : Router) { }

  ngOnInit() {
   // this.form=new FormGroup({
    //  'des_boite': new FormGroup(null, Validators.required )
   // })
  }

  add(formulaire : NgForm){
    this.boiteService.addBoite(formulaire.value).subscribe(
      (response) =>
      {
     // this.boiteService.boite.push(response);
     // this.form.reset();
     const link='/listBoite';
      this.router.navigate(['Boite/listBoite']);
      }
    );
  }

}
