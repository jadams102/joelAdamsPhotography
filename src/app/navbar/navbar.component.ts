import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  toAbout() {
    this.router.navigate(['about'])
  }

  toContact() {
    this.router.navigate(['contact'])
  }

  toBoudoir() {
    this.router.navigate(['boudoir'])
  }

  toPortrait() {
    this.router.navigate(['portrait'])
  }

  toMusic() {
    this.router.navigate(['music'])
  }
}
