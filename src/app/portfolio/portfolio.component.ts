import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import * as jquery from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  galleryName: string;
  images: Upload[];
  user: Observable<firebase.User>;
  imagesLoaded: number;
  imagesLoadedPercentage: number;
  imageToDetail: Upload;

  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.url[0].path);
    this.galleryName = this.route.snapshot.url[0].path;
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
    this.imageToDetail = clickedImage;
    jquery("#image-detail").delay(300).slideDown();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  closeImageDetail() {
    jquery("#image-detail").slideUp();

  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }

  isLoaded() {
    if(this.imagesLoaded === this.images.length - 1) {
      jquery('#loading-gallery').fadeOut(800, function() {
        jquery('ul#gallery-list img').css('opacity', '1');
      });
    } else {
      this.imagesLoaded = this.imagesLoaded + 1;
      this.imagesLoadedPercentage = this.imagesLoaded / this.images.length * 100;
    }
  }
}