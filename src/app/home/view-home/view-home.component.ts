import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { StoreService } from '../../store/store.service';
import { CurrencyModel } from '../../model/currency.model';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  currencies?:Array<CurrencyModel>;

  constructor(public storeService: StoreService, public httpService: HttpService,) { }

  ngOnInit(): void {
    this.httpService.getCurrencies().subscribe(data => {
      this.currencies = data;
      console.log(this.currencies);
      return;
    });
  }

}
