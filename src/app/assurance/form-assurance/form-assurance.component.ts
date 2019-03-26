import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-assurance',
  templateUrl: './form-assurance.component.html',
  styleUrls: ['./form-assurance.component.css']
})
export class FormAssuranceComponent implements OnInit {

  form: FormGroup= new FormGroup({})

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'compagnie_ass': new FormGroup(null, [Validators.required , Validators.maxLength(15) , Validators.pattern('^[az-AZ]')]),
      'adr_assurance': new FormGroup(null, Validators.required ),
      'tel_assurance': new FormGroup(null, [Validators.required , Validators.maxLength(8) , Validators.minLength(8) , Validators.pattern('^[0-9]')] )
    });
  }

}
