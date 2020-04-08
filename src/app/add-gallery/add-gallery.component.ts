import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { GalleryService } from '../services/gallery.service';
import * as jquery from 'jquery';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.scss']
})
export class AddGalleryComponent implements OnInit {
  galleries: Gallery[];
  errorText: string;
  modalOpen: boolean;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.modalOpen = false;
    this.galleryService.getGalleries().subscribe((data)=> {
      this.galleries = data;
    })
  }

  addGallery(title: string, shortDesc: string, longDesc: string) {
    if(!this.checkForDuplicates(title) && this.checkValidTitle(title)) {
      let newGallery: Gallery = new Gallery(title.toLowerCase(), shortDesc, longDesc);
      this.galleryService.addGallery(newGallery);
      jquery('div.addForm textarea, div.addForm input').val('')
      this.errorText = "Gallery Added to Navbar!";
    }
  }

  checkValidTitle(title: string) {
    if (title.length > 0) {
      return true;
    } else {
      this.errorText = "Please enter a title"
      return false;
    }
  }

  checkForDuplicates(title: string) {
    var result = false;
    for(let i = 0; i < this.galleries.length; i++) {
      console.log(result)
      console.log(this.galleries[i].title)
      if (this.galleries[i].title === title) {
        result = true;
        this.errorText = "There is an exisiting gallery with this title"
        return result;
      } 
    }
    return result;
  }
}
