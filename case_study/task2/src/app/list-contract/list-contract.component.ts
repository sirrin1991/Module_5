import {Component, OnInit} from '@angular/core';
import {Contract} from './contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [
    {
      code: 'HD-0001',
      deposit: 2000,
      startDate: '30/04/2021',
      endDate: '05/05/2021',
      customerCode: 'KH-0001',
      serviceCode: 'DV-0002',
      employeeCode: 'NV-0003'
    },
    {
      code: 'HD-0002',
      deposit: 30000,
      startDate: '30/04/2021',
      endDate: '10/05/2021',
      customerCode: 'KH-0002',
      serviceCode: 'DV-0003',
      employeeCode: 'NV-0001'
    },
    {
      code: 'HD-0003',
      deposit: 300,
      startDate: '30/04/2021',
      endDate: '01/05/2021',
      customerCode: 'KH-0003',
      serviceCode: 'DV-0005',
      employeeCode: 'NV-0004'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
