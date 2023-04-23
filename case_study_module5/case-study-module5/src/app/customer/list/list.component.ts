import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CustomerListComponent implements OnInit {
  searchInRangeForm: FormGroup;
  searchByName: string = '';
  searchByCode: string = '';
  searchByEmail: string = '';
  customerList: Customer[];
  page: any;
  totalCustomers: any;
  tempCode: String;
  tempId: number;
  customer: Customer;
  orderBy = 'asc';


  constructor(private customerService: CustomerService, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.searchInRangeForm = this.fb.group({
      startDate: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]],
      endDate: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]
    })
  }

  getAllCustomer() {
    this.customerService.findAll(this.searchByCode, this.searchByName, this.searchByEmail).subscribe(customers => {
      this.customerList = customers;
      this.page = 1;
    });
  }

  send(id: number) {
    this.tempId = id;
    this.customerService.findById(id).subscribe(data => {
      this.customer = data;
      this.tempCode = this.customer.code;
    });
  }

  deleteCustomer() {
    let c = this.customerService.deleteById(this.tempId).subscribe(() => {
      this.getAllCustomer();
    }, e => {
      console.log(e);
    });
  }

  sort() {
    this.orderBy == 'asc' ? this.orderBy = 'desc' : this.orderBy = 'asc';
    this.customerService.sortByName(this.orderBy).subscribe(value => {
      this.customerList = value;
    });
  }


  getCustomerByBirthday() {
    const temp = this.searchInRangeForm.value;
    const endDate = temp['endDate'];
    const startDate = temp['startDate'];
    console.log(endDate);
    this.customerService.searchInRange(startDate, endDate).subscribe(value => {
      this.customerList = value;
    });
  }
}
