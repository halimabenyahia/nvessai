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

  constructor(private energieService : EnergieService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.energieService.addEnergie(formulaire.value).subscribe(
      (response) =>
      {
       this.router.navigate(['Energie/listEnergie']);
      }
    );
  }

}
