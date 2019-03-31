import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.css']
})
export class ListAffectationComponent implements OnInit {

  affectations : any[] ;
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

}
