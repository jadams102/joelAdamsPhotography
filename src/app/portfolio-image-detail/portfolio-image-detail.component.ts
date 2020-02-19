import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { ImageService } from '../services/image.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as jquery from 'jquery';

@Component({
  selector: 'app-portfolio-image-detail',
  templateUrl: './portfolio-image-detail.component.html',
  styleUrls: ['./portfolio-image-detail.component.scss']
})
export class PortfolioImageDetailComponent implements OnInit {

  constructor(private authService: AuthenticationService, private imageService: ImageService, private route: ActivatedRoute, private router: Router,) { }

  @Input()   imageToDisplay: Upload;
  imageKey: string;
  user: Observable<firebase.User>

  ngOnInit() {

  }

  navToGallery() {
    this.router.navigate([this.imageToDisplay.gallery.toLowerCase()])
  }

  deleteImage() {
    this.imageService.removeImage(this.imageToDisplay)
    this.router.navigate([this.imageToDisplay.gallery]);
    window.location.reload();
  }

  isLoaded() {
      jquery('#loading-detail').fadeOut(800, function() {
        jquery('#detail-image').css('opacity', '1');
      });
  }
}
