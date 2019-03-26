import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-boite',
  templateUrl: './form-boite.component.html',
  styleUrls: ['./form-boite.component.css']
})
export class FormBoiteComponent implements OnInit {

  form: FormGroup= new FormGroup({})

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_boite': new FormGroup(null, [Validators.required , Validators.maxLength(15) , Validators.pattern('^[az-AZ]')] )
    })
  }

}
