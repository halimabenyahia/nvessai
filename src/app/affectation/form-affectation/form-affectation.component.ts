import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-affectation',
  templateUrl: './form-affectation.component.html',
  styleUrls: ['./form-affectation.component.css']
})
export class FormAffectationComponent implements OnInit {


  form: FormGroup= new FormGroup({})

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_affectation': new FormGroup(null, [Validators.required , Validators.maxLength(30) , Validators.pattern('^[az-AZ]')])
    })
  }

}
