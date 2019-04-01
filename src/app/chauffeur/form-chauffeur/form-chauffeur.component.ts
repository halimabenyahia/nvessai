import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { Chauffeur } from 'src/app/entity/chauffeur';

@Component({
  selector: 'app-form-chauffeur',
  templateUrl: './form-chauffeur.component.html',
  styleUrls: ['./form-chauffeur.component.css']
})
export class FormChauffeurComponent implements OnInit {

  form: FormGroup= new FormGroup({});
  chauffeur : Chauffeur [];
  errorMessage ;
  constructor(private chauffeurService : ChauffeurService,
              private router : Router) { }

  ngOnInit() {

    this.form=new FormGroup({
      'matricule_ch': new FormControl(null,Validators.required ),
      'nom_ch' : new FormControl(null, [Validators.required , Validators.maxLength(15)]),
      'prenom_ch' : new FormControl(null, [Validators.required , Validators.maxLength(20)]),
      'adr_chauff': new FormControl(null, [Validators.required , Validators.maxLength(20)]) ,
      'tel_chauff': new FormControl(null, [Validators.required , Validators.maxLength(8)])
    })
  }

  add(formulaire : NgForm) {
    console.log("msg");
    this.chauffeurService.addChauffeur(formulaire.value)
     .subscribe(
       (response) => {
        this.chauffeurService.chauffeur.push(response);
        this.form.reset();
        this.router.navigate(['listChauffeur']);
      });
      (error) =>
      {console.log(error);
        this.errorMessage=`probleme de connexion au serveur`}
     
  }


}
