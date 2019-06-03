import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypePieceService } from '../services/type-piece.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-piece',
  templateUrl: './type-piece.component.html',
  styleUrls: ['./type-piece.component.css']
})
export class TypePieceComponent implements OnInit {

  constructor(private typePieceService :TypePieceService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.typePieceService.addTypePiece(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/listTypePiece']);
      }
    );
  }

}
