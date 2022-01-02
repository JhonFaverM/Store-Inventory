import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { factura } from '../../interfaces/factura';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
 form: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      factura: ['', Validators.required],
      cliente: ['', Validators.required],
      vendedor: ['', Validators.required],
      estadoFactura: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarFactura() {
    console.log(this.form);

    const user: factura = {
      factura: this.form.value.factura,
      cliente: this.form.value.cliente,
      vendedor: this.form.value.vendedor,
      estadoFactura: this.form.value.estadoFactura,
      fecha: this.form.value.fecha
    }
    console.log(user);
  }

}

/*
factura: number,
    cliente: string,
    vendedor: string,
    estadoFactura: string,
    fecha: string,
    */
