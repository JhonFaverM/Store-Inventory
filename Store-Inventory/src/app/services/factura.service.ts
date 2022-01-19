import { Injectable } from '@angular/core';
import { factura } from '../components/dashboard/interfaces/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  cantidad!: any[];


  listFacturas: factura[] = [
    {producto: 'Casettera', cantidad: 1, vendedor: 'Monika Lopez', precioUnitario: 100000, precioTotal: 20000, verFactura: '',},
    {producto: 'Bicicleta Scoot', cantidad: 1, vendedor: 'Monika Lopez', precioUnitario: 20000, precioTotal: 20000, verFactura: '', },
  ];
  precioUnitario!: any[];
  precioTotal: any;



  constructor() { }

  getFactura() {
    return this.listFacturas.slice();
  }

  eliminarFactura(index: number) {
    this.listFacturas.splice(index, 1);
  }

  agregarFactura(factura: factura) {
    this.listFacturas.unshift(factura);
  }

  
}

