import {Component, OnInit} from '@angular/core';
import {Image} from './image';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  current = 0;
  imgs: Image[] = [
    {
      id: 1,
      url: '../assets/img/1.jpg'
    },
    {
      id: 2,
      url: '../assets/img/2.jpg'
    }
    , {
      id: 3,
      url: '../assets/img/3.jpg'
    },
    {
      id: 4,
      url: '../assets/img/4.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.loading();
  }

  loading() {
    const interval = setInterval(() => {
      this.current = +this.current + 1;
      if (this.current === this.imgs.length - 1) {
        this.current = 0;
      }
    }, 1000);
  }

}
