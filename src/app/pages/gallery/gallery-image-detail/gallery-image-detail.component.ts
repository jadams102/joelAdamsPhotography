import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../../../models/upload.model';
import { ImageService } from '../../../services/image.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery-image-detail',
  templateUrl: './gallery-image-detail.component.html',
  styleUrls: ['./gallery-image-detail.component.scss']
})
export class GalleryImageDetailComponent implements OnInit {

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router,) { }

  @Input()   imageToDisplay: Upload;
  imageKey: string;
  user: Observable<firebase.User>

  ngOnInit() {

  }

  navToGallery() {
    this.router.navigate([this.imageToDisplay.gallery.toLowerCase()])
  }
}
