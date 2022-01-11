import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FacturaService } from 'src/app/services/factura.service';
import { factura } from '../../interfaces/factura';

@Component({
  selector: 'app-imp-factura',
  templateUrl: './imp-factura.component.html',
  styleUrls: ['./imp-factura.component.css']
})
export class ImpFacturaComponent implements OnInit {
  listFacturas: factura[] = [];
  displayedColumns: string[] = ['producto', 'cantidad', 'precioUnitario', 'precioTotal'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  constructor(private _facturaService: FacturaService) { }

  ngOnInit(): void {
    this.cargarFactura();
  }
  
  cargarFactura() {
    this.listFacturas = this._facturaService.getFactura();
    this.dataSource = new MatTableDataSource(this.listFacturas);
  }

}
