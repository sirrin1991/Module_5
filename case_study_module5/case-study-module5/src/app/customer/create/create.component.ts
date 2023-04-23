import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ToastrService} from 'ngx-toastr';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  typeOfCustomer: CustomerType[] = [];
  constructor(private fb: FormBuilder, private customerService: CustomerService, private toast: ToastrService) {

  }
  initForm(){
    this.createForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]],
      name: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*(\\ [A-Z][a-z]*)*$')]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]],
      idCard: ['', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]],
      birthday: ['', [Validators.required]],
      typeOfCustomer: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z]+([\\_\\.]?[a-z\\d]+)*@[a-z]{3,7}\\.[a-z]{3}$')]],
    });
  }

  ngOnInit(): void {
    this.customerService.getAllTypeOfCustomer().subscribe(data => {
      this.typeOfCustomer = data;
    });
    this.initForm();
  }

  callToast(){
    this.toast.success('Successfully', 'Create new customer', {
      timeOut: 1000
    });
  }

  create() {
    const customer = this.createForm.value;
    this.customerService.save(customer).subscribe(() => {
      this.callToast();
      this.createForm.reset();
    });
  }
}
