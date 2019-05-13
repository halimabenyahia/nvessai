import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false;
  constructor(private router: Router,
              public authentificationService : AuthentificationService) { }

  ngOnInit() {
  }

  goToComponent(route) {
    const link = [route];
    this.router.navigate(link);

  }
  showMenu() {
    this.show = !this.show;
  }

  logout(){
    this.authentificationService.logout();
    this.router.navigate(['']);
  }
}
