import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FacturaService } from 'src/app/services/factura.service';
import { factura } from '../interfaces/factura';

/*
export interface PeriodicElement {
  date: string;
  invoice: number;
  client: string;
  seller: string;
  billScam: string;
}
*/



@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  listFacturas: factura[] = [];
  displayedColumns: string[] = ['producto', 'cantidad', 'precioUnitario', 'precioTotal', 'vendedor', 'fecha', 'acciones', 'verFactura',];
  dataSource!: MatTableDataSource<any>;
  public dateNow = new Date()
  //= new MatTableDataSource(this.listFacturas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /*
  factura: number,
    cliente: string,
    vendedor: string,
    estadoFactura: string,
    fecha: string,
  */

  constructor(private _facturaService: FacturaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarFactura();
  }

  cargarFactura() {
    this.listFacturas = this._facturaService.getFactura();
    this.dataSource = new MatTableDataSource(this.listFacturas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarFactura(index: number) {
    console.log(index);

    this._facturaService.eliminarFactura(index);
    this.cargarFactura();

    this._snackBar.open('Factura eliminada', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
