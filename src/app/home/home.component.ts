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
    var count = 20;


    setInterval(function() {
      if (count <= 1) {
        array = Array.from({length: 20}, (x,i) => i);
        count= 20
      }
      var int = getRandomIntInclusive(1,count);
      var image = array[int] + 1;
      console.log(array);
      console.log(int);
      array.splice(int, 1);
      count--;
      if(jquery(bg[0]).hasClass("active")) {
        jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + image + ".jpg" +")")
        jquery(bg[0]).fadeOut(1500).removeClass("active");
      } else {
        jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + image + ".jpg" +")").fadeIn(1500).addClass("active")
        jquery(bg[1]).removeClass("active");
      }
    }, 3000)
  }

}
