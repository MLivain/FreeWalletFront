import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, map, ReplaySubject, Subject, tap} from "rxjs";
import {Crypto} from "../model/crypto.model";

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  private cryptos: Array<Crypto> = [];
  public total = 0;
  private cryptosSub: BehaviorSubject<Array<Crypto>> = new BehaviorSubject<Array<Crypto>>([]);
  // crypto$ = this.cryptosSub.asObservable();

  trade: ReplaySubject<Crypto> = new ReplaySubject<Crypto>(5);

  constructor() { }

  addCrypto(crypto: Crypto) {
    this.cryptos.push(crypto);
    this.cryptosSub.next(this.cryptos);
    this.trade.next(crypto);
  }

  stop() {
    this.cryptosSub.complete();
  }

  ngOnInit(): void {

  }

  get crypto$() {
    return this.cryptosSub.asObservable().pipe(tap( d => {
      this.total++;
    }));
  }
}
