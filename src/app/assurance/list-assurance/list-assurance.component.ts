import { Component, OnInit } from '@angular/core';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Assurance } from 'src/app/entity/assurance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-assurance',
  templateUrl: './list-assurance.component.html',
  styleUrls: ['./list-assurance.component.css']
})
export class ListAssuranceComponent implements OnInit {

  assurances : Assurance[] ;
  constructor(private assuranceService : AssuranceService,
              private router : Router) { }

  ngOnInit() {
    this.assuranceService.getAssurrance()
    .subscribe(
      (value : any[]) =>
      {
        this.assurances=value ;
        console.log(this.assurances);
      }
    );
  }

  edit(id_assurance){
    this.router.navigate(['Assurance/editAssurance',id_assurance]);
  }

  delete(id_assurance){
    this.assuranceService.supprimer(id_assurance).subscribe(
      (response)=>
      {
        console.log("assurance supprimé !");
        this.router.navigate(['Assurance/listAssurance']);
      }
    );
  }

}
