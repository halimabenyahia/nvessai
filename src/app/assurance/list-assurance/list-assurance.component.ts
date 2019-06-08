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
  config : any ;
  constructor(private assuranceService : AssuranceService,
              private router : Router) {
                this.config = {
                  itemsPerPage: 3,
                  currentPage: 1
                 };
               }

               pageChanged(event) {
                this.config.currentPage = event;
              }

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
    this.router.navigate(['/editAssurance',id_assurance]);
  }

  delete(id_assurance){
    this.assuranceService.supprimer(id_assurance).subscribe(
      (response)=>
      {
        console.log("assurance supprimé !");
        this.router.navigate(['/addAssurance']);
      }
    );
  }

}
