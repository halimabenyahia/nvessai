import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';
import { Router } from '@angular/router';
import { Marque } from 'src/app/entity/marque';

@Component({
  selector: 'app-list-marque',
  templateUrl: './list-marque.component.html',
  styleUrls: ['./list-marque.component.css']
})
export class ListMarqueComponent implements OnInit {

  marques : Marque[]=[] ;
  link ;
  constructor(private marqueService : MarqueService,
              private router : Router) { }

  ngOnInit() {
    this.marqueService.getMarques()
    .subscribe(
      (value : any[]) =>
      {
        this.marques = value ;
        console.log(this.marques);
      }
    );
  }

  delete(id_marque){
    this.marqueService.supprimerMarque(id_marque).subscribe(
      (response) =>
      {
        console.log("marque supprimé ! ") ;
        const link='listMarque';
        this.router.navigate(['listMarque']) ;
      }
    );
  }

  edit(id_marque){
    this.router.navigate(['/editMarque',id_marque]);
  }

}
