import { Component, OnInit } from '@angular/core';
import { EnergieService } from 'src/app/services/energie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Energie } from 'src/app/entity/energie';

@Component({
  selector: 'app-info-energie',
  templateUrl: './info-energie.component.html',
  styleUrls: ['./info-energie.component.css']
})
export class InfoEnergieComponent implements OnInit {

  energie : Energie ;
  constructor(private energieService : EnergieService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.energieService.getEnergieById(params.id).subscribe(
          (energie : Energie) =>
          {
            this.energie=energie ;
            console.log(energie) ;
          }
        );
      }
    );
  }

  modifier(energie){
   this.energieService.edit(energie).subscribe(
     (response) =>
     {
       console.log("energie modifié") ;
       this.router.navigate(['Energie/listEnergie']);
     }
   );
  }

}
