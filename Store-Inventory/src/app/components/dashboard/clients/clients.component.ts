import { Component, OnInit } from '@angular/core';
import { factura } from '../interfaces/factura';


export interface listFacturas {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const listFacturas: factura[] = [
  //{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  
];


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',];
  dataSource = listFacturas;
  constructor() { }

  ngOnInit(): void {
  }

}
