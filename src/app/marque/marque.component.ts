import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../services/marque.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  constructor(private marqueService : MarqueService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.marqueService.addMarque(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/listMarque']);
      }
    );
  }

}
