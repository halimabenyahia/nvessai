import { Component, OnInit } from '@angular/core';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-type-v',
  templateUrl: './info-type-v.component.html',
  styleUrls: ['./info-type-v.component.css']
})
export class InfoTypeVComponent implements OnInit {

  constructor(private typeVService : TypeVehiculeService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire){
    this.typeVService.edittypeVehicule(formulaire.value).subscribe(
      (response) =>
      {
        console.log("type modifié");
        this.router.navigate(['TypeV/listTypeV']);
      }
    );

  }

}
