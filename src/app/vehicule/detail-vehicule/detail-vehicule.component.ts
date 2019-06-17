import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';


declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {

  vehicule : Vehicule ;
  constructor(private activatedRoute : ActivatedRoute,
              private vehicuelService : VehiculeServiceService,
              private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);

        this.vehicuelService.getByIdVehicule(params.id).subscribe(
          (vehicule: Vehicule) => {
            this.vehicule = vehicule;
            console.log('update : ');
            console.log(vehicule);
          }
        );
      }
    );
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
    var res = doc.autoTableHtmlToJson(document.getElementById("myTable"));

    doc.text("Information véhicule " + vehicule.immatriculation, 7, 10);

    // doc.text("vehicule : " + vehicule.immatriculation,7,10 );
    //doc.text("date d'acquisition :" + vehicule.date_acq,7,10);
    // doc.

    //console.log("afterrr");

   // doc.autoTable(x, y);

    //console.log("afterr autotable");

    doc.save("vehicule.pdf");

  }

  gotoAdd(){
    this.router.navigate(['addVehicule']);
  }

}
