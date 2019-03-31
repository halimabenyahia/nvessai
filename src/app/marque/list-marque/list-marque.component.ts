import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-list-marque',
  templateUrl: './list-marque.component.html',
  styleUrls: ['./list-marque.component.css']
})
export class ListMarqueComponent implements OnInit {

  marques : any[] ;
  constructor(private marqueService : MarqueService) { }

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

}
