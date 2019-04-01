import { Component, OnInit } from '@angular/core';

import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';

@Component({
  selector: 'app-list-type-v',
  templateUrl: './list-type-v.component.html',
  styleUrls: ['./list-type-v.component.css']
})
export class ListTypeVComponent implements OnInit {

  typeV : any[] ;
  constructor(private typevehicule : TypeVehiculeService) { }

  ngOnInit() {
    this.typevehicule.getTypeVehicule().subscribe(
      (value : any[])=>
      {this.typeV= value;
      console.log(this.typeV)}
    );
  }

}
