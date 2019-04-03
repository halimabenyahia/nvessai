import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Router } from '@angular/router';
import { Assurance } from 'src/app/entity/assurance';

@Component({
  selector: 'app-info-assurance',
  templateUrl: './info-assurance.component.html',
  styleUrls: ['./info-assurance.component.css']
})
export class InfoAssuranceComponent implements OnInit {

  assurance : Assurance[];
  constructor(private assuranceService : AssuranceService,
              private router : Router) { }

  ngOnInit() {
  }

  modifier(formulaire : NgForm){
    this.assuranceService.editAssurance(formulaire.value).subscribe(
      (response) =>
      {
        console.log("assurance modifié") ;
        this.router.navigate(['Assurance/listAssurance']);
      }
    );

  }

}
