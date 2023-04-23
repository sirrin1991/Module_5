import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customer: Customer;
  updateForm: FormGroup;
  typeOfCustomer: CustomerType[] = [];
  equals(c1: CustomerType, c2: CustomerType){
    return c1.id === c2.id
  };

  constructor(private fb: FormBuilder, private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params.id;
    this.customerService.findById(id).subscribe(data => {
      this.customer = data;
      this.customerService.getAllTypeOfCustomer().subscribe(value => {
        this.typeOfCustomer = value;
        this.initUpdateForm();
      }, e => {
        console.log(e);
      });
    }, error => {
      console.log('find by id: ' + error);
    });

  }

  initUpdateForm() {
    const selectedIndex = this.typeOfCustomer.findIndex(c => c.id === this.customer.typeOfCustomer.id);
    this.updateForm = this.fb.group({
      id: this.customer.id,
      code: [this.customer.code, [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]],
      name: [this.customer.name, [Validators.required, Validators.pattern('^[A-Z][a-z]*(\\ [A-Z][a-z]*)*$')]],
      phone: [this.customer.phone, [Validators.required, Validators.pattern('^(090|091|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]],
      idCard: [this.customer.idCard, [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]],
      birthday: [this.customer.birthday, [Validators.required]],
      typeOfCustomer: [this.customer.typeOfCustomer, [Validators.required]],
      address: [this.customer.address, [Validators.required]],
      gender: [this.customer.gender, [Validators.required]],
      email: [this.customer.email, [Validators.required, Validators.pattern('^[a-z]+([\\_\\.]?[a-z\\d]+)*@[a-z]{3,7}\\.[a-z]{3}$')]],
    });
  }

  updateCustomer() {
    let tempCustomer = this.updateForm.value;
    let typeId = tempCustomer.typeOfCustomer;
    console.log(typeId);
    let id = tempCustomer.id;
    // this.customerService.findCTById(typeId).subscribe((data)=>{
    //   tempCustomer.typeOfCustomer = data;
    //   this.customerService.updateCustomer(tempCustomer, id).subscribe(() => {
    //     alert('Successfully');
    //     this.router.navigateByUrl('/customer/list');
    //   });
    // });
    this.customerService.updateCustomer(tempCustomer, id).subscribe(() => {
      alert('Successfully');
      this.router.navigateByUrl('/customer/list');
    });

  }
}
