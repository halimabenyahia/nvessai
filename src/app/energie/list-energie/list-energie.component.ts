import { Component, OnInit } from '@angular/core';
import { EnergieService } from 'src/app/services/energie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-energie',
  templateUrl: './list-energie.component.html',
  styleUrls: ['./list-energie.component.css']
})
export class ListEnergieComponent implements OnInit {

  energies : any[] ;
  constructor(private energieService : EnergieService) { }

  ngOnInit() {
    this.energieService.getEnergie()
    .subscribe((value: any[]) => {
      this.energies = value;
     console.log(this.energies)
    })
  }

}
