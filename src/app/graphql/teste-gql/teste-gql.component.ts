import { Component, OnInit } from '@angular/core';
import { ExchangeRate, RatesGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-teste-gql',
  templateUrl: './teste-gql.component.html',
  styleUrls: ['./teste-gql.component.scss']
})
export class TesteGqlComponent implements OnInit {
  rates: ExchangeRate[] = [];
  constructor(private readonly ratesGQL: RatesGQL) { }

  ngOnInit(): void {
    this.ratesGQL.fetch({ currency: "USD" }).subscribe(
    (result) => {
      console.log({ result })
      this.rates = result.data.rates as ExchangeRate[];
    })
  }
}
