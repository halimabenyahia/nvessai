import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modele',
  templateUrl: './form-modele.component.html',
  styleUrls: ['./form-modele.component.css']
})
export class FormModeleComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'marque': new FormControl(null, Validators.required ),
      'des_modele': new FormControl(null, [Validators.required , Validators.pattern('^[az-AZ]')])
    })
  }

}
