import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { MarqueService } from 'src/app/services/marque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-marque',
  templateUrl: './form-marque.component.html',
  styleUrls: ['./form-marque.component.css']
})
export class FormMarqueComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  constructor(private marqueService : MarqueService,
              private router : Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_marque': new FormControl(null, Validators.required )
    })
  }

  add(formulaire : NgForm){
    this.marqueService.addMarque(formulaire.value).subscribe(
      (response) =>
      {
       // this.marqueService.marque.push(response);
        this.form.reset();
        this.router.navigate(['listMarque']);
      }
    );

  }

}
