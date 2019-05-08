import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Depense } from 'src/app/entity/depense';

@Component({
  selector: 'app-info-depense',
  templateUrl: './info-depense.component.html',
  styleUrls: ['./info-depense.component.css']
})
export class InfoDepenseComponent implements OnInit {

  depense : Depense ;
  constructor(private depenseService : DepenseService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.depenseService.getDepensesById(params.id).subscribe(
          (depense : Depense) =>
          {
            this.depense=depense ;
            console.log(depense) ;
          }

        );
      }
    );
  }

  update(depense){
    return this.depenseService.edit(depense).subscribe(
      (response) =>
      {
        console.log("depense modifié");
        this.router.navigate(['depenses/listDepense']);
      }

    );
  }

}
