import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypeEntretienService } from '../services/type-entretien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-entretien',
  templateUrl: './type-entretien.component.html',
  styleUrls: ['./type-entretien.component.css']
})
export class TypeEntretienComponent implements OnInit {

  constructor(private typeEntretienService : TypeEntretienService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typeEntretienService.addtypeEntretien(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/listTypeEntretien']);
      }

    );

  }

}
