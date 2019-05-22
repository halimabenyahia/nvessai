import { Component, OnInit } from '@angular/core';
import { TypePieceService } from 'src/app/services/type-piece.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-type-piece',
  templateUrl: './form-type-piece.component.html',
  styleUrls: ['./form-type-piece.component.css']
})
export class FormTypePieceComponent implements OnInit {

  constructor(private typePieceService : TypePieceService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typePieceService.addTypePiece(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['typePieces/listTypePiece']);
      }
    );
  }

}
