import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { FacturasComponent } from './facturas/facturas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '',component: InicioComponent },
    { path: 'clients',component: ClientsComponent },
    { path: 'products',component: ProductsComponent },
    { path: 'accesorios',component:  AccesoriosComponent},
    { path: 'facturas',component:  FacturasComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
