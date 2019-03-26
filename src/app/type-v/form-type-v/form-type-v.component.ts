import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-type-v',
  templateUrl: './form-type-v.component.html',
  styleUrls: ['./form-type-v.component.css']
})
export class FormTypeVComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_typeVehicule': new FormControl(null, [Validators.required , Validators.pattern('^[az-AZ]')] )
    })
  }

}
