import { Component, OnInit } from '@angular/core';
import { TypeEntretienService } from 'src/app/services/type-entretien.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeEntretien } from 'src/app/entity/typeEntretien';

@Component({
  selector: 'app-info-type-entretien',
  templateUrl: './info-type-entretien.component.html',
  styleUrls: ['./info-type-entretien.component.css']
})
export class InfoTypeEntretienComponent implements OnInit {

  typeEntretien : TypeEntretien ;
  constructor(private typeEntretienService : TypeEntretienService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.typeEntretienService.getByIdTypeEntretien(params.id).subscribe(
          (typeEntretien : TypeEntretien) =>
          {
            this.typeEntretien=typeEntretien ;
            console.log(this.typeEntretien) ;
          }
        );
      }
    );
  }

  modifier(typeEntretien){
    this.typeEntretienService.editTypeEntretien(typeEntretien).subscribe(
      (response) =>
      {
        console.log("type modifié");
        this.router.navigate(['/listTypeEntretien']);
      }
    );

  }


}
