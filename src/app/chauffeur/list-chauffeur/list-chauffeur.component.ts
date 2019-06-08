import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { HttpClient } from '@angular/common/http';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-chauffeur',
  templateUrl: './list-chauffeur.component.html',
  styleUrls: ['./list-chauffeur.component.css']
})
export class ListChauffeurComponent implements OnInit {

 
  chauffeur : Chauffeur[];
  link1 ;
  config :any ;
  constructor(private chauffeurService : ChauffeurService,
              private httpClient: HttpClient,
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

     this.chauffeurService.getAllChauffeur()
      .subscribe((value: any[]) => {
        this.chauffeur = value;
       console.log(this.chauffeur)
      })
  }

  delete(id_chauffeur,index){
    this.chauffeurService.supprimer(id_chauffeur)
    .subscribe(
      (value) => {
        console.log('chauffeur supprimé !');
        this.router.navigate(['/addChauffeur']);    
  }
  );
}

gotoInfo(id_chauffeur){
  const link1='/editChauffeur';
  this.router.navigate(['/editChauffeur',id_chauffeur]) ;
}

}
 