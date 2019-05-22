import { Component, OnInit } from '@angular/core';
import { TypeDepenseService } from 'src/app/services/type-depense.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-type-depense',
  templateUrl: './form-type-depense.component.html',
  styleUrls: ['./form-type-depense.component.css']
})
export class FormTypeDepenseComponent implements OnInit {

  constructor(private typeDepenseService : TypeDepenseService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typeDepenseService.addTypeDepense(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['typeDepenses/listTypeDepense']);
      }

    );

  }

}
