import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../../models/upload.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import * as jquery from 'jquery';
import { Gallery } from 'src/app/models/gallery.model';
import { GalleryService } from 'src/app/services/gallery.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryObj: Gallery;
  galleryName: string;
  images: Upload[];
  user: Observable<firebase.User>;
  imagesLoaded: number;
  imagesLoadedPercentage: number;
  imageToDetail: Upload;
  imageToEdit: Upload;
  imageElement: any;

  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute, private galleryService: GalleryService) { 
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.galleryName = this.route.snapshot.params.name;
    this.galleryService.getGalleries().subscribe((data) => {
      for(let i = 0;  i < data.length; i++) {
        if(data[i].title === this.galleryName) {
          this.galleryObj = data[i];
        }
      }
    });
    this.imagesLoaded = 0;
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.imageService.getGallery().subscribe(data => {
      this.images = data;
      this.user.subscribe((data)=>{
        if (this.images.length === 0 && data == null) {
          this.router.navigate(['/'])
        }
      })


      if (this.images.length === 0) {
        jquery('#loading-gallery').fadeOut(800, function() {
          jquery('.desc-box').css('opacity', '1');
          jquery('ul#gallery-list').css('opacity', '1');
          jquery('button.contact-btn').css('opacity', '1');
          jquery('app-footer').css('opacity', '1');

        });
      }
      this.imageToEdit = this.images[0];
    });

  }

  goToImageDetail(clickedImage, i) {
    if (this.imagesLoadedPercentage === 100) {
    this.imageToDetail = clickedImage;
    this.imageElement = i;
    jquery(".image-detail-container").css('opacity','1').delay(500).css('display','block');
    jquery("html,body").css('overflow','hidden')
    }
  }

  nextImage() {
    if (this.imageElement === this.images.length - 1) {
      this.imageElement = 0;
      this.imageToDetail = this.images[this.imageElement];
    } else {
      this.imageElement++;
      this.imageToDetail = this.images[this.imageElement];
    }
  }

  prevImage() {
    if (this.imageElement === 0) {
      this.imageElement = this.images.length - 1;
      this.imageToDetail = this.images[this.imageElement];
    } else {
      this.imageElement--;
      this.imageToDetail = this.images[this.imageElement];
    }
  }

  closeImageDetail() {
    jquery(".image-detail-container").css('opacity','0').delay(500).css('display','none');
    jquery("html,body").css('overflow','visible')
  }

  editImage(image) {
    this.imageToEdit = image;
    jquery('div#edit-modal-container').toggleClass('show')
  }

  toggleEditImageModal() {
    jquery('div#edit-modal-container').toggleClass('show')
  }

  deleteImage(image) {
    if(confirm("Are you sure you want to delete this image?")){
      this.imageService.removeImage(image);
    }
  }

  isLoaded() {
    if(this.imagesLoaded === this.images.length - 1) {
      this.imagesLoadedPercentage = 100;
      jquery('#loading-gallery').fadeOut(800, function() {
        jquery('.desc-box').css('opacity', '1');
        jquery('ul#gallery-list').css('opacity', '1');
        jquery('button.contact-btn').css('opacity', '1');
        jquery('app-footer').css('opacity', '1');
      
      });
    } else {
      this.imagesLoaded = this.imagesLoaded + 1;
      this.imagesLoadedPercentage = this.imagesLoaded / this.images.length * 100;
    }
  }
}