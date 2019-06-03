import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoiteService } from '../services/boite.service';
import { NgForm } from '@angular/forms';
import { Boite } from '../entity/boite';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})
export class BoiteComponent implements OnInit {

  boite : Boite[]= [] ;
  constructor(private boiteService : BoiteService,
              private router : Router) { }

  ngOnInit() {

  }

  add(formulaire : NgForm){
    this.boiteService.addBoite(formulaire.value).subscribe(
      (response) =>
      {console.log("type boite ajouté") ;
     const link='/listBoite';
      this.router.navigate(['Boite/listBoite']);
      }
    );
  }

}
