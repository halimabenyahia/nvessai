import { Component, OnInit } from '@angular/core';
import { TypeVService } from 'src/app/services/type-v.service';

@Component({
  selector: 'app-list-type-v',
  templateUrl: './list-type-v.component.html',
  styleUrls: ['./list-type-v.component.css']
})
export class ListTypeVComponent implements OnInit {

  typeV : any[] ;
  constructor(private typeVService : TypeVService) { }

  ngOnInit() {
    this.typeVService.getTypeVehicule().subscribe(
      (value : any[])=>
      {this.typeV= value;
      console.log(this.typeV)}
    );
  }

}
