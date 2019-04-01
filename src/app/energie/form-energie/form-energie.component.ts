import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { EnergieService } from 'src/app/services/energie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-energie',
  templateUrl: './form-energie.component.html',
  styleUrls: ['./form-energie.component.css']
})
export class FormEnergieComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  constructor(private energieService : EnergieService,
              private router : Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_energie': new FormControl(null, Validators.required)
    })
  }

  add(formulaire : NgForm){
    this.energieService.addEnergie(formulaire.value).subscribe(
      (response) =>
      {
      //  this.energieService.energie.push(response);
       this.form.reset();
       this.router.navigate(['listEnergie']);
      }
    );
  }

}
