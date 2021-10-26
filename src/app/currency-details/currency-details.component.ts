import { Component, OnInit } from '@angular/core';
import { CurrencyDetailsService } from './currency-details.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {

  currencydetails: any;

  constructor(private currencyDetailsService: CurrencyDetailsService) { }

  ngOnInit(): void {
    this.getCurrencyDetails();
  }

  getCurrencyDetails(): void {
    this.currencyDetailsService.getCurrencyDetails()
      .subscribe(
        currencydetails => {
          this.currencydetails = currencydetails;
        },
        error => {
          console.log(error);
        });
  }
}
