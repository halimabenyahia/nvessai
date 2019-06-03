import { Component, OnInit } from '@angular/core';
import { TypeDepenseService } from 'src/app/services/type-depense.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeDepense } from 'src/app/entity/typeDepense';

@Component({
  selector: 'app-info-type-depense',
  templateUrl: './info-type-depense.component.html',
  styleUrls: ['./info-type-depense.component.css']
})
export class InfoTypeDepenseComponent implements OnInit {

  typeDepense : TypeDepense ;
  constructor(private typeDepenseService : TypeDepenseService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.typeDepenseService.getByIdTypeDepense(params.id).subscribe(
          (typeDepense : TypeDepense) =>
          {
            this.typeDepense=typeDepense ;
            console.log(typeDepense) ;
          }
        );
      }
    );
  }

  modifier(typeDepense){
    this.typeDepenseService.editTypeDepense(typeDepense).subscribe(
      (response) =>
      {
        console.log("type modifié");
        this.router.navigate(['/listTypeDepense']);
      }
    );

  }

}
