import { Injectable } from '@angular/core';
import { CurrencyModel } from '../model/currency.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  items = ["1","2"];

  currencies?: Array<CurrencyModel>;
  // itemsRick:

  constructor() { }

  getItem() {

  }
  saveItem(item: string) {
    this.items.push(item);
  }

  deleteItem(toDelete: any) {
    this.items = this.items.filter(i => i != toDelete);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  storeUsers(results: Array<CurrencyModel>) {
    this.currencies = results;
  }
}
