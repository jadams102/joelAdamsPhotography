import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as jquery from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>

  constructor( private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
      console.log(jquery("button.navbar-toggler").hasClass("collapsed"))

      jquery('.collapser').on('click', function(){
        if(window.innerWidth < 768 && (jquery("button.navbar-toggler").hasClass("collapsed")) === false) {
        jquery('.navbar-toggler').click(); //bootstrap 4.x
        }
      });
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

  toAbout() {
    this.router.navigate(['about'])
  }

  toContact() {
    this.router.navigate(['contact'])
  }

  toConcept() {
    this.router.navigate(['concept'])
  }

  toPortrait() {
    this.router.navigate(['portrait'])
  }

  toMusic() {
    this.router.navigate(['music'])
  }
}
