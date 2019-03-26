import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChauffeurService } from 'src/app/services/chauffeur.service';

@Component({
  selector: 'app-form-chauffeur',
  templateUrl: './form-chauffeur.component.html',
  styleUrls: ['./form-chauffeur.component.css']
})
export class FormChauffeurComponent implements OnInit {

  form: FormGroup= new FormGroup({})

  constructor(private chauffeurService : ChauffeurService) { }

  ngOnInit() {

    this.form=new FormGroup({
      'matricule_ch': new FormControl(null, [Validators.required , Validators.maxLength(5), Validators.pattern('^[0-9]')]),
      'nom_ch' : new FormControl(null, [Validators.required , Validators.maxLength(15) , Validators.pattern('^[az-AZ]')]),
      'prenom_ch' : new FormControl(null, [Validators.required , Validators.maxLength(20) , Validators.pattern('^[az-AZ]')]),
      'adr_chauff': new FormControl(null, [Validators.required , Validators.maxLength(20) , Validators.pattern('^[az-AZ]')]) ,
      'tel_chauff': new FormControl(null, [Validators.required , Validators.maxLength(8), Validators.pattern('^[0-9]')])
    })
  }

 // add() {
  //  this.ChauffeurService.addChauffeur(this.form.value)
    //  .subscribe(response => {
      //  this.ChauffeurService.chauffeur.push(response.body);
       // this.form.reset();
       // this.router.navigate(['Chauffeur/addChauffeur']);
     // });
  //}

}
