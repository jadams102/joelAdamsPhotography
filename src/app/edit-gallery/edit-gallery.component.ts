import { Component, OnInit, Input } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../models/gallery.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {
  currentGallery: Gallery;
  errorText: string;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe((data)=> {
      for(let i = 0; i < data.length; i++) {
        if(data[i].title === this.route.snapshot.params.name) {
          this.currentGallery = data[i];
        }
      }
    });
  }

  updateGallery(gallery) {
    this.galleryService.updateGallery(gallery);
  }
}
