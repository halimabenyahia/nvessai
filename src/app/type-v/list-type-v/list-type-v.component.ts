import { Component, OnInit } from '@angular/core';

import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { TypeVehicule } from 'src/app/entity/typeVehicule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-type-v',
  templateUrl: './list-type-v.component.html',
  styleUrls: ['./list-type-v.component.css']
})
export class ListTypeVComponent implements OnInit {

  typeV : TypeVehicule[] =[] ;
  link ;
  config : any ;
  constructor(private typevehiculeService : TypeVehiculeService,
              private router : Router) {
                this.config = {
                  itemsPerPage: 3,
                  currentPage: 1
                 };
              }

              pageChanged(event) {
                this.config.currentPage = event;
              } 
               

  ngOnInit() {
    this.typevehiculeService.getTypeVehicule().subscribe(
      (value : any[])=>
      {this.typeV= value;
      console.log(this.typeV)}
    );
  }

  delete(id_typeVehicule){
    this.typevehiculeService.supprimerTypeV(id_typeVehicule).subscribe(
      (response) =>
      {
        console.log("type supprimé") ;
        this.router.navigate(['/listTypeV']) ;
      }
    );
  }

  edit(id_typeVehicule){
    this.router.navigate(['/editTypeV/' ,id_typeVehicule]);
  }

}
