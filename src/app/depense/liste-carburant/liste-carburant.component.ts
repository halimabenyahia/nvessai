import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { Router } from '@angular/router';
import { Depense } from 'src/app/entity/depense';

@Component({
  selector: 'app-liste-carburant',
  templateUrl: './liste-carburant.component.html',
  styleUrls: ['./liste-carburant.component.css']
})
export class ListeCarburantComponent implements OnInit {

  depenses : Depense ;
  depenseCarburant : Depense ;
  config : any ;
  constructor(private depenseService : DepenseService,
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
    this.depenseService.getDepenses().subscribe(
      (depense : Depense) =>
      {
        this.depenses = depense ;
      }
    );

    this.depenseService.getListCarburant().subscribe(
      (dep : Depense) =>
      {
        this.depenseCarburant = dep ;
      }
    );
  }

  delete(id_depense){
    this.depenseService.supprimer(id_depense).subscribe(
      (response) =>
      {
        this.router.navigate(['depenses']);
      }
    );
  }

  gotoInfo(){

  }

  gotoSumByMonthCarburant(){
    this.router.navigate(['depenseCarburant']);
  }

}
