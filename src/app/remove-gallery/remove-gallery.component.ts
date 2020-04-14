import { Component, OnInit, Input } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../models/gallery.model';
import { Upload } from '../models/upload.model';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-gallery',
  templateUrl: './remove-gallery.component.html',
  styleUrls: ['./remove-gallery.component.scss']
})
export class RemoveGalleryComponent implements OnInit {
  galleryInfo: Gallery[];
  cannotBeDeleted: string[];
  removeCheckComplete: boolean;
  galleriesChecked: number;

  constructor(private galleryService: GalleryService, private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.galleriesChecked = 0;
    this.cannotBeDeleted = [];
    this.galleryService.getGalleries().subscribe((data) => {
      this.galleryInfo = data;
      console.log(this.galleryInfo);
      this.imageService.getAllGalleries().subscribe((data) => {
        for(let i = 0; i < data.length; i++) {
          this.cannotBeDeleted.push(data[i].$key);
        }
      }) 
    })
  }

  canBeDeleted(galleryTitle) {
    if(this.cannotBeDeleted.includes(galleryTitle)) {
      this.galleriesChecked++;
      this.completeCheck();
      return false;
    } else {
      this.galleriesChecked++;
      this.completeCheck();
      return true;
    }
  }

  completeCheck() {
    if (this.galleriesChecked === this.galleryInfo.length) {
      this.removeCheckComplete = true;
    } else {
      this.removeCheckComplete = false;
    }
  }

  removeGallery(key) {
    this.galleryService.deleteGallery(key);
    this.router.navigate(['/'])
  }
}
