import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToComponent(route){
    const link = [route] ;
    this.router.navigate(link) ;

  }
showMenu() {
  this.show = ! this.show;  
}
}
