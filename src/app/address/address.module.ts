import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressCardComponent } from './address-card.component';
import { AddressListComponent } from './address-list.component';
import { AddressFormComponent } from './address-form.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AddressFormComponent, AddressCardComponent, AddressListComponent],
  exports: [AddressFormComponent],
})
export class AddressModule {}
