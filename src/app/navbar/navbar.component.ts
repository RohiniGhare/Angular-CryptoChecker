import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedCurrency: string = "INR";
  constructor(private currencyService : CurrencyService){}

  sendCurrency(event:string){
    // console.log(event);
    this.currencyService.setCurrency(event);
  }
  ngOnInit(): void {
  }

}
