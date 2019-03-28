import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-chauffeur',
  templateUrl: './list-chauffeur.component.html',
  styleUrls: ['./list-chauffeur.component.css']
})
export class ListChauffeurComponent implements OnInit {

 
  chauffeurs :any[] ;
  constructor(private chauffeurService : ChauffeurService,
    private httpClient: HttpClient) { }

  ngOnInit() {

     this.chauffeurService.getAllChauffeur()
      .subscribe((value: any[]) => {
        this.chauffeurs = value;
       console.log(this.chauffeurs)
      })

   // this.chauffeurService.getAllChauffeur().subscribe(
    //  (response => 
     //   {this.pages = response})
   // { console.log('response' , response )},
    //);
  }

}
