import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as jquery from 'jquery';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../models/gallery.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  user: Observable<firebase.User>;
  galleries: Gallery[];

  addingImage: boolean;
  addingGallery: boolean;
  removingGallery: boolean;
  editingGallery: boolean;
  viewingGallery: boolean;

  galleryName: string;
  constructor( private authService: AuthenticationService, private galleryService: GalleryService, private router: Router, private route: ActivatedRoute) {
        // force route reload whenever params change;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.galleryName = this.route.snapshot.params.name;
    console.log(this.route.snapshot.params.name);
    console.log(this.galleryName)
    this.galleryService.getGalleries().subscribe((data) => {
      this.galleries = data;
    })
    this.addingImage = false;
    this.addingGallery = false;
    this.removingGallery = false;
    this.editingGallery = false;
    this.user = this.authService.authUser();
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

  toGallery(title: string) {
    this.router.navigate(['/gallery/' + title])
  }

  openModal() {
    jquery('div.control-panel-modal').addClass('show');
  }

  togglePanel() {
    jquery('div.control-panel').toggleClass('show');
  }

  addImages() {
    this.addingImage = true;
    this.addingGallery = false;
    this.removingGallery = false;
    this.editingGallery = false;
  }

  addGallery() {
    this.addingImage = false;
    this.addingGallery = true;
    this.removingGallery = false;
    this.editingGallery = false;
  }

  removeGallery() {
    this.addingImage = false;
    this.addingGallery = false;
    this.removingGallery = true;
    this.editingGallery = false;
  }

  editGallery() {
    this.addingImage = false;
    this.addingGallery = false;
    this.removingGallery = false;
    this.editingGallery = true;
  }
}
