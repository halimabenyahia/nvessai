import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js' ;

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {

  chart = [] ;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' ,
                   'Aout' , 'Septembre' , 'Octobre' , 'Novembre' , 'Decembre'],
          datasets: [{
              label: 'Dépense en DT',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },

      // Configuration options go here
      options: {}
  });
  }

}
