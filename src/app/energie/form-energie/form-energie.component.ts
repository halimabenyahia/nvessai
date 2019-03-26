import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-energie',
  templateUrl: './form-energie.component.html',
  styleUrls: ['./form-energie.component.css']
})
export class FormEnergieComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_energie': new FormControl(null, [Validators.required , Validators.maxLength(15) , Validators.pattern('^[az-AZ]')])
    })
  }

}
