import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from 'src/app/entity/vehicule';
//import * as jsPDF from 'jspdf'; 

//import 'jspdf-autotable';
//import * as autoTable from 'jspdf-autotable';
//import { autoTable } from 'jspdf-autotable'; 


//declare let jsPDF : jsPDF;



declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');


@Component({
  selector: 'app-vehicul-list',
  templateUrl: './vehicul-list.component.html',
  styleUrls: ['./vehicul-list.component.css']
})
export class VehiculListComponent implements OnInit {

  vehicules: Vehicule[];
  link;
  page: number = 0;
  config: any;

  constructor(private VehiculeService: VehiculeServiceService,
              private router: Router)
     {
         this.config = {
         itemsPerPage: 5,
         currentPage: 1
        };
     } 

  pageChanged(event) {
    this.config.currentPage = event;
  }



  ngOnInit() {
    this.VehiculeService.getAllVehicule().subscribe(
      (value: any) => {
      this.vehicules = value;
        console.log(this.vehicules)
      });
  }




  download(vehicule, i) {
    console.log("download");
    const doc = new jsPDF();

    let x = ["ID", "Name", "Country"];
    let y = [
      ["1", "Shaw", "Tanzania"],
      ["2", "Nelson", "Kazakhstan"],
      ["3", "Garcia", "Madagascar"]
    ];

    console.log(doc)
    //var res = doc.autoTableHtmlToJson(document.getElementById("myTable"));

    doc.text("Information véhicule " + vehicule.immatriculation, 7, 10);

    // doc.text("vehicule : " + vehicule.immatriculation,7,10 );
    //doc.text("date d'acquisition :" + vehicule.date_acq,7,10);
    // doc.

    //console.log("afterrr");

    doc.autoTable(x, y);

    //console.log("afterr autotable");

    doc.save("vehicule.pdf");

  }



  delete(id_vehicule, index) {
    this.VehiculeService.deleteVehicule(id_vehicule)
      .subscribe(value => {
        console.log('Véhicule supprimé !');
        this.router.navigate(['addVehicule']);
      });
  }

  edit(id_vehicule) {
    this.router.navigate(['editVehicule/', id_vehicule]);
  }

}
