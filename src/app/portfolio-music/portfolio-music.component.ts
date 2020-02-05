import { Component, OnInit } from '@angular/core';
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
export class PortfolioMusicComponent implements OnInit {

  galleryName: string;
  images: Upload[];
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryName = 'Music'
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.imageService.getGallery().subscribe(data => {
      this.images = data;
    });
    this.user = this.authService.authUser();
  }

  goToImageDetail(clickedImage) {
    this.router.navigate([clickedImage.gallery, clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }

  slideDown($event) {
    console.log($event.target)
    jquery($event.target).fadeIn({queue: true}, "slow");
  }

}
