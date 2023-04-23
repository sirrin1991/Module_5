import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';


@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  term: string;
  searchValue: string;
  customer: Customer;
  customerList: Array<Customer> = [
    {code: 'KH-0001', name: 'Nguyen A', birthday: '01/01/1991',
      gender: 'Nam', idCard: '1', phone: '1', email: 'nguyena@gmail.com', address: 'Quang Nam', typeOfCustomer: 'Diamond'},
    {code: 'KH-0002', name: 'Nguyen B', birthday: '01/01/1992',
      gender: 'Nu', idCard: '2', phone: '2', email: 'nguyenb@gmail.com', address: 'Da Nang', typeOfCustomer: 'Platinum'},
    {code: 'KH-0003', name: 'Nguyen C', birthday: '01/01/1993',
      gender: 'Nam', idCard: '3', phone: '3', email: 'nguyenc@gmail.com', address: 'Ha Noi', typeOfCustomer: 'Gold'},
    {code: 'KH-0004', name: 'Nguyen D', birthday: '01/01/1994',
      gender: 'Nu', idCard: '4', phone: '4', email: 'nguyend@gmail.com', address: 'Ho Chi Minh', typeOfCustomer: 'Silver'}
  ];
  page: any;
  totalCustomers: 3;

  constructor() {
  }

  ngOnInit(): void {
  }

}
