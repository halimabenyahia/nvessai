import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Assurance } from 'src/app/entity/assurance';

@Component({
  selector: 'app-info-assurance',
  templateUrl: './info-assurance.component.html',
  styleUrls: ['./info-assurance.component.css']
})
export class InfoAssuranceComponent implements OnInit {

  assurance : Assurance;
  constructor(private assuranceService : AssuranceService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.assuranceService.getAssuranceById(params.id).subscribe(
          (assurance : Assurance) => 
          {
            this.assurance=assurance;
            console.log(assurance);
          }
        );
      }
    );
  }

  modifier(assurance){
    this.assuranceService.editAssurance(assurance).subscribe(
      (response) =>
      {
        console.log("assurance modifié") ;
        this.router.navigate(['Assurance/listAssurance']);
      }
    );

  }

}
