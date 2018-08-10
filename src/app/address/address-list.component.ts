import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAddress } from './address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
})
export class AddressListComponent implements OnInit {
  @Input()
  addressList: IAddress[];
  @Output()
  removeAddress = new EventEmitter<IAddress>();

  constructor() {}

  ngOnInit() {}

  remove(address: IAddress) {
    this.removeAddress.emit(address);
  }
}
