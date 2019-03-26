import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-marque',
  templateUrl: './form-marque.component.html',
  styleUrls: ['./form-marque.component.css']
})
export class FormMarqueComponent implements OnInit {

  form: FormGroup= new FormGroup({})
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      'des_marque': new FormControl(null, [Validators.required , Validators.maxLength(15) , Validators.pattern('^[az-AZ]')] )
    })


  }

}
