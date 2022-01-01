import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  invoice: number;
  client: string;
  seller: string;
  billScam: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invoice: 1, date: '20/12/2021', client: 'Jhon Machado', seller: 'Molusca', billScam: 'pagada'},
  
];

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  displayedColumns: string[] = ['invoice', 'date', 'client', 'seller', 'bill scam'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
