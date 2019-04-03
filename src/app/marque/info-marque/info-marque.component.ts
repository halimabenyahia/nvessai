import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-marque',
  templateUrl: './info-marque.component.html',
  styleUrls: ['./info-marque.component.css']
})
export class InfoMarqueComponent implements OnInit {

  constructor(private marqueService : MarqueService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire){
    this.marqueService.editMarque(formulaire.value).subscribe(
      (response) =>
      {
        console.log("marque modifié") ;
        this.router.navigate(['Marque/listMarque']);
      }
    );

  }

}
