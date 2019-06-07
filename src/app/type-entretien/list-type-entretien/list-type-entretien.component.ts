import { Component, OnInit } from '@angular/core';
import { TypeEntretienService } from 'src/app/services/type-entretien.service';
import { TypeEntretien } from 'src/app/entity/typeEntretien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-type-entretien',
  templateUrl: './list-type-entretien.component.html',
  styleUrls: ['./list-type-entretien.component.css']
})
export class ListTypeEntretienComponent implements OnInit {

  typeEntretiens : TypeEntretien [] ;
  constructor(private typeEntretienService : TypeEntretienService,
              private router : Router) { }

  ngOnInit() {
    this.typeEntretienService.getAlltypeEntretiens().subscribe(
      (value : any[]) =>
      {
        this.typeEntretiens = value ;
        console.log(this.typeEntretiens);
      }
    );
  }

  edit(id_typeEntretien){
    this.router.navigate(['/editTypeEntretien',id_typeEntretien]);
  }

  delete(id_typeEntretien){
    this.typeEntretienService.deleteTypeEntretien(id_typeEntretien).subscribe(
      (response) =>
      {
        console.log("type supprimé") ;
        this.router.navigate(['/typesEntretiens']);
      }
    );
  }

}
