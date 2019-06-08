import { Component, OnInit } from '@angular/core';
import { EnergieService } from 'src/app/services/energie.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Energie } from 'src/app/entity/energie';

@Component({
  selector: 'app-list-energie',
  templateUrl: './list-energie.component.html',
  styleUrls: ['./list-energie.component.css']
})
export class ListEnergieComponent implements OnInit {

  energies : Energie[]=[] ;
  link ;
  config : any ;
  constructor(private energieService : EnergieService,
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
    this.energieService.getEnergie()
    .subscribe((value: any[]) => {
      this.energies = value;
     console.log(this.energies)
    })
  }

  delete(id_energie){
    this.energieService.supprimerEnergie(id_energie).subscribe(
      (response) =>
      {
        const link='listEnergie' ;
        this.router.navigate(['listEnergie']);
      }
    );
  }

  edit(id_energie){
    this.router.navigate(['/editEnergie', id_energie]);
  }

}
