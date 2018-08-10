import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAddress } from './address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  @Input()
  address: IAddress;
  @Output()
  removeAddress = new EventEmitter<IAddress>();

  constructor() {}

  ngOnInit() {}

  remove() {
    this.removeAddress.emit(this.address);
  }
}
