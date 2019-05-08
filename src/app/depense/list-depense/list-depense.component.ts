import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { Router } from '@angular/router';
import { Depense } from 'src/app/entity/depense';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {

  depense : Depense [];
  constructor(private depenseService : DepenseService,
              private router : Router) { }

  ngOnInit() {
    this.depenseService.getDepenses().subscribe(
      (value : any[]) =>
      {
        this.depense=value ;
        console.log(this.depense);
      }
    );
  }

  gotoInfo(id_depense){
    this.router.navigate(['depenses/editDepense',id_depense]);
  }

  delete(id_depense,i){
    this.depenseService.supprimer(id_depense).subscribe(
      (response) =>
      {
        this.router.navigate(['depenses']);
      }
    );
  }

}
