import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAddress } from './address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
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
