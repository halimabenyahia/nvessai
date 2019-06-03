import { Component, OnInit } from '@angular/core';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeVehicule } from 'src/app/entity/typeVehicule';

@Component({
  selector: 'app-info-type-v',
  templateUrl: './info-type-v.component.html',
  styleUrls: ['./info-type-v.component.css']
})
export class InfoTypeVComponent implements OnInit {

  typeVehicule : TypeVehicule ;
  constructor(private typeVService : TypeVehiculeService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.typeVService.getTypeVehiculeById(params.id).subscribe(
          (typeVehicule : TypeVehicule) =>
          {
            this.typeVehicule=typeVehicule ;
            console.log(typeVehicule) ;
          }
        );
      }
    );
  }

  modifier(typeVehicule){
    this.typeVService.edittypeVehicule(typeVehicule).subscribe(
      (response) =>
      {
        console.log("type modifié");
        this.router.navigate(['/listTypeV']);
      }
    );

  }

}
