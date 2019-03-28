import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

  constructor(private router:Router) { }
  show = false ;

  ngOnInit() {
    
  }

 

}
