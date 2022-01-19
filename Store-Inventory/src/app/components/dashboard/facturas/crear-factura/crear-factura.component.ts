import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura.service';
import { factura } from '../../interfaces/factura';

//const nombre = document.getNombreProductoById(nombre)

//nueva ruta
export interface listFacturas {}
//nueva ruta
const listFacturas: factura[] = [];

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  //public dateNow = new Date()
  form: FormGroup;
  precioUnitario!: number;
  cantidad: any;
  precioTotal!: any;
  factura: any;



 vendedor = ['Jhon Machado', 'Monica Lopez', 'Pepe Perez'];

 producto = [  
    'Rock Hopper Specialized', 'Expert specialized', 'Alligator Gw', 'Hyena Gw', 'Panter Gw', 
    'X-caliber Treck', 'Marlin Treck', 'Madone Slr'
  ];
  
  constructor(private fb: FormBuilder, 
              private _facturaService: FacturaService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      factura: ['', Validators.required],
      cantidad: ['', Validators.required],
      vendedor: ['', Validators.required],
      producto: ['', Validators.required],
      precioUnitario: ['',  Validators.required],
      precioTotal: ['',  Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarFactura() {

    const user: factura = {
      producto: this.form.value.producto,
      cantidad: this.form.value.cantidad,
      vendedor: this.form.value.vendedor,
      precioUnitario: this.form.value.precioUnitario,
      precioTotal: this.form.value.precioTotal,
      verFactura: this.form.value.verFactura,
      //precioTotal: this.precioUnitario * this.cantidad,

    };

    //console.log(this.form.get('precioUnitario')?.value);

    this._facturaService.agregarFactura(user);
    this.router.navigate(['/dashboard/facturas'])

    this._snackBar.open('Factura agregada', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }
    functionMultiply = () => {
      const precioTotal = (parseInt(this.cantidad) * (this.precioUnitario));
  
    };
    
 
}

