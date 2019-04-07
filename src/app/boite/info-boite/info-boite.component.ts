import { Component, OnInit } from '@angular/core';
import { BoiteService } from 'src/app/services/boite.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Boite } from 'src/app/entity/boite';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-boite',
  templateUrl: './info-boite.component.html',
  styleUrls: ['./info-boite.component.css']
})
export class InfoBoiteComponent implements OnInit {

  boite : Boite ;
  constructor(private boiteService : BoiteService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params);
        this.boiteService.getTypeBoiteById(params.id).subscribe(
          (boite : Boite) => 
          {
            this.boite=boite ;
            console.log(boite);
          }
        );
      }
    );
  }

  modifier(boite : Boite){
    this.boiteService.edit(boite).subscribe(
      (response) =>
      {
       console.log("boite modifié") ;
       this.router.navigate(['Boite/listBoite']);

      }
    );

  }

}
