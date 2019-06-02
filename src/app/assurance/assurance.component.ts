import { Component, OnInit } from '@angular/core';
import { AssuranceService } from '../services/assurance.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements OnInit {

  constructor(private assuranceService: AssuranceService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.assuranceService.addAssurance(formulaire.value).subscribe(
      (response) =>
      {
        console.log("assurance ajouté") ;
        this.router.navigate(['/listAssurance']) ;
      }
    );

}
}
