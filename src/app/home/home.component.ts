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
      imagePath = './assets/img/slides/';
    } else {
      imagePath = './assets/img/slides/mobile/mobile-';
    }
    var bg = jquery("div.bg");
    var imgNumber = 2;
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
          jquery(bg[0]).fadeOut(600).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, 600)
        } else {
          setTimeout(function() {
            isChanging();
          }, 600)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(600).addClass("active")
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
          jquery(bg[0]).fadeOut(600).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, 600)
        } else {
          setTimeout(function() {
            isChanging();
          }, 600)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(600).addClass("active")
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
