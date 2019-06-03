import { Component, OnInit } from '@angular/core';
import { TypeVehiculeService } from '../services/type-vehicule.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type-v',
  templateUrl: './type-v.component.html',
  styleUrls: ['./type-v.component.css']
})
export class TypeVComponent implements OnInit {

  constructor(private typeVehiculeService : TypeVehiculeService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typeVehiculeService.addTypeV(formulaire.value)
    .subscribe(
      (response) =>
      {
        this.router.navigate(['/listTypeV']);
      });

    }

}
