import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Upload } from 'src/app/models/upload.model';
import * as jquery from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }
  slideshowName = "about";
  slideLimit = 9;

  imageToDetail: Upload;
  imageElement: any;
  galleryImages: any[];

  ngOnInit() {
    let galleryArry = [];
    for(let i = 1; i <= this.slideLimit; i++) {
      let uploadEntry = new Upload();
      uploadEntry.url="../../../assets/img/about/img-" + i + ".jpg";
      galleryArry.push(uploadEntry);
    }
    this.galleryImages = galleryArry;
  }

  navToContact() {
    this.router.navigate(['contact'])
  }

  goToImageDetail(clickedImage, i) {
    this.imageToDetail = clickedImage;
    this.imageElement = i;
    jquery(".image-detail-container").css('opacity','1').delay(500).css('display','block');
    jquery("html,body").css('overflow','hidden')
  }

  closeImageDetail() {
    jquery(".image-detail-container").css('opacity','0').delay(500).css('display','none');
    jquery("html,body").css('overflow','visible')
  }

  nextImage() {
    if (this.imageElement === this.galleryImages.length - 1) {
      this.imageElement = 0;
      this.imageToDetail = this.galleryImages[this.imageElement];
    } else {
      this.imageElement++;
      this.imageToDetail = this.galleryImages[this.imageElement];
    }
  }

  prevImage() {
    if (this.imageElement === 0) {
      this.imageElement = this.galleryImages.length - 1;
      this.imageToDetail = this.galleryImages[this.imageElement];
    } else {
      this.imageElement--;
      this.imageToDetail = this.galleryImages[this.imageElement];
    }
  }

}
