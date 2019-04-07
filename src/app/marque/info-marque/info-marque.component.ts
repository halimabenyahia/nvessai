import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Marque } from 'src/app/entity/marque';

@Component({
  selector: 'app-info-marque',
  templateUrl: './info-marque.component.html',
  styleUrls: ['./info-marque.component.css']
})
export class InfoMarqueComponent implements OnInit {

  marque : Marque ;
  constructor(private marqueService : MarqueService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.marqueService.getMarquesById(params.id).subscribe(
          (marque : Marque) =>
          {
            this.marque=marque ;
            console.log(marque) ;
          }
        );
      }
    );
  }

  modifier(marque){
    this.marqueService.editMarque(marque).subscribe(
      (response) =>
      {
        console.log("marque modifié") ;
        this.router.navigate(['Marque/listMarque']);
      }
    );

  }

}
