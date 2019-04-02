import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';
import { Affectation } from 'src/app/entity/affectation';

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.css']
})
export class ListAffectationComponent implements OnInit {

  affectations : Affectation[] ;
  constructor(private affectationService : AffectationService) { }

  ngOnInit() {
    this.affectationService.getAffectation()
    .subscribe(
      (value : any[]) =>
      {
        this.affectations= value ;
        console.log(this.affectations);
      }
    );
  }

  delete(id_affectation, index){
    this.affectationService.supprimer(id_affectation).subscribe(
      (value) => {
        console.log('affectation supprimé !');
        this.affectationService.affectation.splice(index , 1) ;
  }
  );
}
}
