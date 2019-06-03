import { Component, OnInit } from '@angular/core';
import { EnergieService } from '../services/energie.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-energie',
  templateUrl: './energie.component.html',
  styleUrls: ['./energie.component.css']
})
export class EnergieComponent implements OnInit {

  constructor(private energieService: EnergieService,
              private router :Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.energieService.addEnergie(formulaire.value).subscribe(
      (response) =>
      {
       this.router.navigate(['/listEnergie']);
      }
    );
  }

}
