import { Component, OnInit } from '@angular/core';
import { AffectationService } from '../services/affectation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {

  constructor(private affectationService : AffectationService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.affectationService.addAffectation(formulaire.value).subscribe(
      (response) =>
      {this.router.navigate(['/listAffectation']);}
    
    );
  }

}
