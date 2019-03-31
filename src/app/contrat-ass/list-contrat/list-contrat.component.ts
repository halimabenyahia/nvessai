import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  contrats : any[];
  constructor(private contratService : ContratService) { }

  ngOnInit() {
    this.contratService.getContratAss()
    .subscribe(
      (value : any[]) =>
      {
        this.contrats=value ;
        console.log(this.contrats);
      }
    );
  }

}
