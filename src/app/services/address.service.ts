import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { IAddress } from '../address/address';

// Singleton
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  db: Dexie;

  constructor() {
    this.db = new Dexie('friends');
    this.db.version(1).stores({
      addresses: 'email, name, phone',
    });
  }

  loadAddresses(): Promise<IAddress[]> {
    return this.db['addresses'].orderBy('name').toArray();
  }

  saveAddress(address: IAddress): Promise<any> {
    return this.db['addresses']
      .put(address)
      .then(() => {
        return { status: true, message: 'Saved!' };
      })
      .catch(err => {
        return { status: false, message: err };
      });
  }

  deleteAddress(address: IAddress): Promise<any> {
    return this.db['addresses']
      .delete(address.email)
      .then(() => {
        return { status: true, message: 'Deleted!' };
      })
      .catch(err => {
        return { status: false, mesage: err };
      });
  }
}
