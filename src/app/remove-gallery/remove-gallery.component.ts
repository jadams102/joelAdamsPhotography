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
  cannotBeDeleted: boolean[];

  constructor(private galleryService: GalleryService, private imageService: ImageService, private router: Router) { }

  ngOnInit() {
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
      return false;
    } else {
      return true;
    }
  }

  removeGallery(key) {
    this.galleryService.deleteGallery(key);
    this.router.navigate(['/'])
  }
}
