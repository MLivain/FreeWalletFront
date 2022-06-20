import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyModel} from "../model/currency.model";
import {map, tap} from "rxjs/operators";
import {StoreService} from "../store/store.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiBasePathError="http://localhost:3000";
  apiBasePath = "http://localhost:3000";
  apiBaseCurrencyPath = "/currency";
  apiBasUserPath = "/user";
  apiBasWalletPath = "/wallet";
  apiBaseregisterCurrencyDayPricePath = "/currencyDayPrice";
  path="";
  constructor(public httpClient: HttpClient, public storeService: StoreService) { }

  getCurrencies() {
    console.log('a',this.apiBasePathError); 
    return this.httpClient
      .get<Array<CurrencyModel>>(this.apiBasePath+this.apiBaseCurrencyPath);
  }

 // .pipe(
 //   map((data: Array<CurrencyModel>) =>
 //         return data;
 //     )
 // );


  getExchangeRate(currencyOne:string,currencyTwo:string){
      
  }

  getItemFailed() {
    return this.httpClient.get(this.apiBasePath);
  }
}
