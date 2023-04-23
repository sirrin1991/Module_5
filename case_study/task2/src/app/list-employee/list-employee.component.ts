import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  term: string;
  searchValue: string;
  employees: Employee[] = [
    {code: 'NV-0001', name: 'Nguyen Thanh Cong', birthday: '10/09/1991', idCard: '201201201', salary: '1501', phone: '0909090909',
      email: 'sirrin123@gmail.com', address: 'Da Nang', position: 'Director', education: 'Post-Graduate', department: 'Administrative Offices'},
    {code: 'NV-0002', name: 'Nguyen Duc Hau', birthday: '02/09/1997', idCard: '202202202', salary: '1500', phone: '0909090908',
      email: 'dhau@gmail.com', address: 'Da Nang', position: 'Manager', education: 'Under-Graduate', department: 'HR'},
    {code: 'NV-0003', name: 'Le Duc Sang', birthday: '14/02/1992', idCard: '203203203', salary: '1500', phone: '0909090907',
      email: 'ducsang@gmail.com', address: 'Quang Nam', position: 'Supervisor', education: 'Post-Graduate', department: 'HR'},
    {code: 'NV-0004', name: 'Bui Thanh Tai', birthday: '30/04/1994', idCard: '204204204', salary: '1450', phone: '0909090906',
      email: 'taibui@gmail.com', address: 'Hue', position: 'Receptionist', education: 'College', department: 'Sale-Marketing'},
    {code: 'NV-0005', name: 'Tran Hong Gia Dong', birthday: '01/05/1995', idCard: '205205205', salary: '1499', phone: '0909090905',
      email: 'thgdong@gmail.com', address: 'Da Nang', position: 'Director', education: 'Post-Graduate', department: 'Sale-Marketing'}
  ];
  page: number;
  totalEmployees: number;
  constructor() {}

  ngOnInit(): void {

  }
}
