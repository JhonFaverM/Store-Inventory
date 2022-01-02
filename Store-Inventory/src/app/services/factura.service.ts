import { Injectable } from '@angular/core';
import { factura } from '../components/dashboard/interfaces/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  listFacturas: factura[] = [
    {factura: 1, fecha: '20/12/2021', cliente: 'Jhon Machado', vendedor: 'Molusca', estadoFactura: 'pagada'},
    {factura: 2, fecha: '20/12/2021', cliente: 'molusca', vendedor: 'tusca', estadoFactura: 'pagada'},
    
  ];

  constructor() { }

  getFactura() {
    return this.listFacturas.slice();
  }

  eliminarFactura(index: number) {
    this.listFacturas.splice(index, 1);
  }

}
