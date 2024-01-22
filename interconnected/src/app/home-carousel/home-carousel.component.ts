import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  images = [
    'assets/carousal/image1.jpg',
    'assets/carousal/image2.jpg',
    'assets/carousal/image3.jpg',
    'assets/carousal/image4.jpg',
    // 'assets/carousal/image5.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // Customize carousel configuration options here
    config.interval = 4000; // Set the interval in milliseconds (4 seconds in this example)
  }

  ngOnInit(): void {

  }

}
