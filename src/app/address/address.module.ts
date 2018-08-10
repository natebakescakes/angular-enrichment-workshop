import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressCardComponent } from './address-card.component';
import { AddressListComponent } from './address-list.component';
import { AddressComponent } from './address.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AddressComponent, AddressCardComponent, AddressListComponent],
  exports: [AddressComponent],
})
export class AddressModule {}
