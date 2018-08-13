import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAddress } from './address';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  @ViewChild('addressForm')
  addressForm: NgForm;

  addressList: IAddress[] = [];

  constructor(private addressService: AddressService) {}

  ngOnInit() {
    this.addressService
      .loadAddresses()
      .then((addressList: IAddress[]) => {
        console.log('Addresses from database: ', addressList);
        this.addressList = addressList;
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }

  addAddress() {
    // Promise - non-blocking, async
    this.addressService.saveAddress(this.addressForm.value).then(result => {
      console.log('saveAddress status: ', result);
      if (result.status) {
        this.addressList.push(this.addressForm.value);
        this.addressForm.resetForm();
      }
    });
  }

  removeAddress(address: IAddress) {
    this.addressService.deleteAddress(address).then(result => {
      console.log('deleteAddress status: ', result);
      if (result.status) {
        this.addressList.splice(
          this.addressList.findIndex(x => x.name === address.name),
          1,
        );
      }
    });
  }
}
