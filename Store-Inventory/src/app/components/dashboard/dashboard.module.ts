import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacturasComponent } from './facturas/facturas.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { ImpFacturaComponent } from './facturas/imp-factura/imp-factura.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    FacturasComponent,
    CrearFacturaComponent,
    ImpFacturaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
