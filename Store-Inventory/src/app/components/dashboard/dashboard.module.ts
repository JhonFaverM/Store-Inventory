import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { FacturasComponent } from './facturas/facturas.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ProductsComponent,
    ClientsComponent,
    AccesoriosComponent,
    FacturasComponent,
    CrearFacturaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
