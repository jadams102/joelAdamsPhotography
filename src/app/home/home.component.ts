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
    var array = Array.from({length: 20}, (x,i) => i);
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }


    setInterval(function() {
      if (array.length <= 1) {
        array = Array.from({length: 20}, (x,i) => i);
      }
      var int = getRandomIntInclusive(1,array.length);
      var image = array[int] + 1;
      array.splice(int, 1);
      if(jquery(bg[0]).hasClass("active")) {
        jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + image + "-min.jpg" +")")
        jquery(bg[0]).fadeOut(2000).removeClass("active");
      } else {
        jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + image + "-min.jpg" +")").fadeIn(2000).addClass("active")
        jquery(bg[1]).removeClass("active");
      }
    }, 8000)
  }

}
