import { Component, OnInit } from '@angular/core';
import { BoiteService } from 'src/app/services/boite.service';
import { Router } from '@angular/router';
import { Boite } from 'src/app/entity/boite';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-boite',
  templateUrl: './info-boite.component.html',
  styleUrls: ['./info-boite.component.css']
})
export class InfoBoiteComponent implements OnInit {

  boite : Boite[] ;
  constructor(private boiteService : BoiteService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire : NgForm){
    this.boiteService.edit(formulaire.value).subscribe(
      (response) =>
      {
       console.log("boite modifié") ;
       this.router.navigate(['Boite/listBoite']);

      }
    );

  }

}
