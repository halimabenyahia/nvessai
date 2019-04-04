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
  }

  add(formulaire : NgForm){
    this.boiteService.addBoite(formulaire.value).subscribe(
      (response) =>
      {console.log("type boite ajouté") ;
     const link='/listBoite';
      this.router.navigate(['Boite/listBoite']);
      }
    );
  }

}
