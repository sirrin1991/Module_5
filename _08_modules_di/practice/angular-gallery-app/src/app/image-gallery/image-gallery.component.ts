import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './image-card/token'

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg',
    'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2015/12/thong-tin-chi-tiet-ve-thanh-pho-hoi.jpg',
    'https://www.lagunalangco.com/wp-content/uploads/2018/06/chinh-phuc-de-nhat-hung-quan-hai-van-quan.jpg',
    'https://znews-photo.zadn.vn/w660/Uploaded/ngotno/2020_10_17/109742726_283130326302694_3269414925443125770_n_1_.jpg'
  ];
  itemWidth: number;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }

}
