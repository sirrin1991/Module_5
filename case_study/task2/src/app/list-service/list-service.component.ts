import {Component, OnInit} from '@angular/core';
import {Service} from './service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  term: string;
  searchValue: string;
  services: Service[] = [
    {
      code: 'DV-0001',
      name: 'Sunset',
      standard: 'Vip',
      area: 200,
      areaPool: 60,
      totalFloor: 4,
      maxOfPeople: 10,
      convenience: 'Free Buffet',
      status: 'Available',
      cost: 1000,
      serviceType: 'Villa',
      rentType: 'Day'
    },

    {
      code: 'DV-0002',
      name: 'Sunrise',
      standard: 'Boss',
      area: 250,
      areaPool: 70,
      totalFloor: 4,
      maxOfPeople: 15,
      convenience: 'Free Buffet',
      status: 'Not Available',
      cost: 1200,
      serviceType: 'Villa',
      rentType: 'Day'
    },

    {
      code: 'DV-0003',
      name: 'Heaven',
      standard: 'President',
      area: 300,
      areaPool: 100,
      totalFloor: 6,
      maxOfPeople: 50,
      convenience: 'Free Buffet',
      status: 'Not Available',
      cost: 10000,
      serviceType: 'Villa',
      rentType: 'Day'
    },

    {
      code: 'DV-0004',
      name: 'Pearl',
      standard: 'High Standard',
      area: 150,
      areaPool: 50,
      totalFloor: 3,
      maxOfPeople: 8,
      convenience: 'Free Beverage',
      status: 'Not Available',
      cost: 800,
      serviceType: 'House',
      rentType: 'Day'
    },

    {
      code: 'DV-0005',
      name: 'Garden',
      standard: 'Normal',
      area: 50,
      areaPool: 0,
      totalFloor: 1,
      maxOfPeople: 4,
      convenience: 'No',
      status: 'Available',
      cost: 400,
      serviceType: 'Room',
      rentType: 'Day'
    },
  ];
  page: any;
  totalServices: number;
  constructor() {
  }

  ngOnInit(): void {
  }

}
