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
  constructor(private energieService : EnergieService,
              private router : Router) { }

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
        this.router.navigate(this.link);
      }
    );
  }

  edit(id_energie){
    this.router.navigate(['Energie/editEnergie', id_energie]);
  }

}
