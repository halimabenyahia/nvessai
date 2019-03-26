import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vehicul-list',
  templateUrl: './vehicul-list.component.html',
  styleUrls: ['./vehicul-list.component.css']
})
export class VehiculListComponent implements OnInit {

  vehicules : any[];
  text: any;
  public search: Subject<string> = new Subject<string>();

  constructor( private VehiculeService:VehiculeServiceService,
               private router: Router ) { }

  ngOnInit() {
   // this.VehiculeServiceService.getAllVehicule()
     // .subscribe((value: any[]) => {
      //  this.vehicules = value;
      // console.log(this.vehicules)
     // })
     // this.VehiculeServiceService.subscribe(value => {
       // this.text =  value;
    // });
    }

  //edit(id_immatriculation) {
   
    //this.router.navigate(['edit', id_immatriculation]); //{ relativeTo: this.router });
  //}

 // delete(id_immatriculation, index) {
   // this.VehiculeServiceService.deleteVehicule(id_immatriculation)
    //  .subscribe(value => {
     //   console.log('Véhicule supprimé !');
       // this.VehiculeServiceService.vehicules.splice(index, 1);
       // this.router.navigate(['players']);
     // });
  //}

}
