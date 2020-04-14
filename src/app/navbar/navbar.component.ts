import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as jquery from 'jquery';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../models/gallery.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  galleries: Gallery[];

  constructor( private authService: AuthenticationService, private galleryService: GalleryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe((data) => {
      this.galleries = data;
    })
    this.user = this.authService.authUser();
    jquery('.collapser').on('click', function(){
      if(window.innerWidth < 768 && jquery("button.navbar-toggler").hasClass("collapsed") === false) {
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

  toGallery(title: string) {
    this.router.navigate(['/gallery/' + title])
  }
}
