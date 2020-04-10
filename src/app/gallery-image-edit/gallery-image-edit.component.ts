import { Component, OnInit, Input } from '@angular/core';
import { Upload } from '../models/upload.model';
import { ImageService } from '../services/image.service';
import * as jquery from 'jquery';

@Component({
  selector: 'app-gallery-image-edit',
  templateUrl: './gallery-image-edit.component.html',
  styleUrls: ['./gallery-image-edit.component.scss']
})
export class GalleryImageEditComponent implements OnInit {
  @Input() imageToEdit;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  updateImage(image) {
    this.imageService.updateImage(image);
  }

  closeModal() {
    jquery('div#edit-modal-container').css('opacity', 0).delay(500).hide();
  }

}
