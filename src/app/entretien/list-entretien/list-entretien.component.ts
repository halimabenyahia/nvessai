import { Component, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { TypeEntretienService } from 'src/app/services/type-entretien.service';
import { Entretien } from 'src/app/entity/entretien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entretien',
  templateUrl: './list-entretien.component.html',
  styleUrls: ['./list-entretien.component.css']
})
export class ListEntretienComponent implements OnInit {

  entretiens : Entretien [];
  constructor(private entretienService : EntretienService,
              private typeEntretienService : TypeEntretienService,
              private router : Router) { }

  ngOnInit() {
    this.entretienService.getProgEntretiens().subscribe(
      (value : any[]) =>
      {
        this.entretiens = value ;
        console.log(this.entretiens);
      }
    );
  }

  delete(id_programme){
    this.entretienService.supprimer(id_programme).subscribe(
      (response) =>
      {
        console.log("entretien supprimé ! ") ;
        //const link='listMarque';
        this.router.navigate(['/entretien']) ;
      }
    );
  }

  gotoInfo(id_programme){
    this.router.navigate(['/editEntretien/',id_programme]);
  }

}
