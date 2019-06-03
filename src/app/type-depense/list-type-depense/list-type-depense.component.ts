import { Component, OnInit } from '@angular/core';
import { TypeDepense } from 'src/app/entity/typeDepense';
import { TypeDepenseService } from 'src/app/services/type-depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-type-depense',
  templateUrl: './list-type-depense.component.html',
  styleUrls: ['./list-type-depense.component.css']
})
export class ListTypeDepenseComponent implements OnInit {

  typeDepense : TypeDepense [] ;
  constructor(private typeDepenseService :TypeDepenseService,
              private router : Router) { }

  ngOnInit() {
    this.typeDepenseService.getAllTypeDepense().subscribe(
      (value : any[])=>
      {this.typeDepense= value;
      console.log(this.typeDepense)
      }
    );
  }

  edit(id_typeDepense){
    this.router.navigate(['/editTypeDepense',id_typeDepense]);
  }

  delete(id_typeDepense){
    this.typeDepenseService.deleteTypeDepense(id_typeDepense).subscribe(
      (response) =>
      {
        console.log("type supprimé") ;
        this.router.navigate(['/addTypeDepense']);
      }
    );
  }
}
