import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ImpFacturaComponent } from './facturas/imp-factura/imp-factura.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '',component: InicioComponent },
    { path: 'facturas',component:  FacturasComponent },
    { path: 'crear-factura',component:  CrearFacturaComponent },
    {  path: 'imp-factura',component:  ImpFacturaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
