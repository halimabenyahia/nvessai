import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-depense',
  templateUrl: './form-depense.component.html',
  styleUrls: ['./form-depense.component.css']
})
export class FormDepenseComponent implements OnInit {

  nameRegex = '[a-zA-Z ]+';
  constructor(private depenseService : DepenseService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.depenseService.addDepense(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['depenses/listDepense']);
      },
      (error) =>
      {
        console.log("probleme de connexion au serveur");
      }
    );
  }

}
