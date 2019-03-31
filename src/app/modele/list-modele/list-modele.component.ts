import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-list-modele',
  templateUrl: './list-modele.component.html',
  styleUrls: ['./list-modele.component.css']
})
export class ListModeleComponent implements OnInit {

  modeles : any[] ;
  constructor(private modeleService : ModeleService) { }

  ngOnInit() {
    this.modeleService.getModeles()
    .subscribe(
      (value : any[]) =>
      {
        this.modeles=value ;
        console.log(this.modeles) ;
      }
    );
  }

}
