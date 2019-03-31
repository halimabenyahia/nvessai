import { Component, OnInit } from '@angular/core';
import { BoiteService } from 'src/app/services/boite.service';

@Component({
  selector: 'app-list-boite',
  templateUrl: './list-boite.component.html',
  styleUrls: ['./list-boite.component.css']
})
export class ListBoiteComponent implements OnInit {

  boites :any[]; 
  constructor(private BoitesService : BoiteService) { }

  ngOnInit() {
    this.BoitesService.getTypeBoite()
    .subscribe(
      (value  : any[]) =>
      {this.boites=value ;
      console.log(this.boites)}
    );
   
  }

}
