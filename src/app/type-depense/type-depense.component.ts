import { Component, OnInit } from '@angular/core';
import { TypeDepenseService } from '../services/type-depense.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type-depense',
  templateUrl: './type-depense.component.html',
  styleUrls: ['./type-depense.component.css']
})
export class TypeDepenseComponent implements OnInit {

  constructor(private typeDepenseService : TypeDepenseService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typeDepenseService.addTypeDepense(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/listTypeDepense']);
      }

    );

  }

}
