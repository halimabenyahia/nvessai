import { Component, OnInit } from '@angular/core';
import { EnergieService } from 'src/app/services/energie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-energie',
  templateUrl: './info-energie.component.html',
  styleUrls: ['./info-energie.component.css']
})
export class InfoEnergieComponent implements OnInit {

  constructor(private energieService : EnergieService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire){
   this.energieService.edit(formulaire.value).subscribe(
     (response) =>
     {
       console.log("energie modifié") ;
       this.router.navigate(['Energie/listEnergie']);
     }
   );
  }

}
