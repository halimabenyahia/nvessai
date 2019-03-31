import { Component, OnInit } from '@angular/core';
import { AssuranceService } from 'src/app/services/assurance.service';

@Component({
  selector: 'app-list-assurance',
  templateUrl: './list-assurance.component.html',
  styleUrls: ['./list-assurance.component.css']
})
export class ListAssuranceComponent implements OnInit {

  assurances : any[] ;
  constructor(private assuranceService : AssuranceService) { }

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

}
