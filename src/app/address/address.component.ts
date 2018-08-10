import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { IAddress } from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @ViewChild('addressForm')
  addressForm: NgForm;

  addressList: IAddress[] = [];

  constructor() {}

  ngOnInit() {}

  addAddress() {
    this.addressList.push(this.addressForm.value);
    this.addressForm.resetForm();
  }

  removeAddress(address: IAddress) {
    this.addressList.splice(
      this.addressList.findIndex(x => x.name === address.name),
      1,
    );
  }
}
