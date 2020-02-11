import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var imagePath = '';
    if(window.innerWidth > 768) {
      jquery("body").append('<div style="display: none;"class="preload"><img src="../../assets/img/slides/img-1-min.jpg" alt=""><img src="../../assets/img/slides/img-2-min.jpg" alt=""><img src="../../assets/img/slides/img-3-min.jpg" alt=""><img src="../../assets/img/slides/img-4-min.jpg" alt=""><img src="../../assets/img/slides/img-5-min.jpg" alt=""><img src="../../assets/img/slides/img-6-min.jpg" alt=""><img src="../../assets/img/slides/img-7-min.jpg" alt=""><img src="../../assets/img/slides/img-8-min.jpg" alt=""><img src="../../assets/img/slides/img-9-min.jpg" alt=""><img src="../../assets/img/slides/img-10-min.jpg" alt=""><img src="../../assets/img/slides/img-11-min.jpg" alt=""><img src="../../assets/img/slides/img-12-min.jpg" alt=""><img src="../../assets/img/slides/img-13-min.jpg" alt=""><img src="../../assets/img/slides/img-14-min.jpg" alt=""><img src="../../assets/img/slides/img-15-min.jpg" alt=""><img src="../../assets/img/slides/img-16-min.jpg" alt=""><img src="../../assets/img/slides/img-17-min.jpg" alt=""><img src="../../assets/img/slides/img-18-min.jpg" alt=""><img src="../../assets/img/slides/img-19-min.jpg" alt=""><img src="../../assets/img/slides/img-20-min.jpg" alt=""></div>')
      imagePath = './assets/img/slides/';
    } else {
      jquery("body").append('<div style="display: none;" class="preload"><img src="../../assets/img/slides/mobile/mobile-img-1-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-2-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-3-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-4-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-5-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-6-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-7-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-8-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-9-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-10-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-11-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-12-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-13-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-14-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-15-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-16-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-17-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-18-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-19-min.jpg" alt=""><img src="../../assets/img/slides/mobile/mobile-img-20-min.jpg" alt=""></div>');
      imagePath = './assets/img/slides/mobile/mobile-';
    }
    var bg = jquery("div.bg");
    var imgNumber = 2;
    var controlSpeed = 300;
    var changing = false;

    function isChanging() {
      changing = !changing
    }

    jquery("div.ctrl-left").on("click", function () {
      if(!changing) {
        clearInterval(interval);
        changing = true;
        if(imgNumber === 1) {
          imgNumber = 20;
        } else {
          imgNumber--;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(controlSpeed).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
        } else {
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(controlSpeed).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
      }
    })

    jquery("div.ctrl-right").on("click", function () {
      if(!changing) {
        clearInterval(interval);
        changing = true;
        if(imgNumber === 20) {
          imgNumber = 1;
        } else {
          imgNumber++;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(controlSpeed).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
        } else {
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(controlSpeed).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
      }
    })

    var interval = setInterval(function() {
      if (!changing) {
        changing = true;
        if (imgNumber === 20) {
          imgNumber = 1;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(2000).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, 2000)
        } else {
          setTimeout(function() {
            isChanging();
          }, 2000)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(2000).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
        imgNumber++;
      }



    }, 7000)

  }

}
