import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { HttpClient } from '@angular/common/http';
import { Chauffeur } from 'src/app/entity/chauffeur';

@Component({
  selector: 'app-list-chauffeur',
  templateUrl: './list-chauffeur.component.html',
  styleUrls: ['./list-chauffeur.component.css']
})
export class ListChauffeurComponent implements OnInit {

 
  chauffeur : Chauffeur[];
  constructor(private chauffeurService : ChauffeurService,
    private httpClient: HttpClient) { }

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
      value => {
        console.log('chauffeur supprimé !');
        this.chauffeurService.chauffeur.splice(index, 1);
  }
  );
}

}
