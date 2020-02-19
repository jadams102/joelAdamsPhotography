import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import * as jquery from 'jquery';

@Component({
  selector: 'app-portfolio-music',
  templateUrl: './portfolio-music.component.html',
  styleUrls: ['./portfolio-music.component.scss']
})
export class PortfolioMusicComponent implements OnInit, AfterViewInit {

  galleryName: string;
  images: Upload[];
  user: Observable<firebase.User>;
  imagesLoaded: number;

  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryName = 'Music'
    this.imagesLoaded = 0;
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.imageService.getGallery().subscribe(data => {
      this.images = data;
    });
    this.user = this.authService.authUser();;

  }

  ngAfterViewInit() {

  }

  goToImageDetail(clickedImage) {
    this.router.navigate([clickedImage.gallery, clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }

  isLoaded() {
    console.log(this.imagesLoaded)
    console.log(this.images.length)
    if(this.imagesLoaded === this.images.length - 1) {
      jquery('.sk-circle').fadeOut(800, function() {
        jquery('ul#gallery-list img').css('opacity', '1');
      });
    } else {
      this.imagesLoaded = this.imagesLoaded + 1;
    }
  }
}