import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { AngularFireList } from 'angularfire2/database';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-boudoir',
  templateUrl: './portfolio-boudoir.component.html',
  styleUrls: ['./portfolio-boudoir.component.scss']
})
export class PortfolioBoudoirComponent implements OnInit {

  galleryName: string;
  images: AngularFireList<any[]>;
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['name'];
    });
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.images = this.imageService.getGallery()
    this.user = this.authService.authUser();
  }

  goToImageDetail(clickedImage) {
    this.router.navigate(['gallery', clickedImage.gallery, clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }

}
