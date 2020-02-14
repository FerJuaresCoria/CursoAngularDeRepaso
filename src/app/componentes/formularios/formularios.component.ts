import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre: '',
    apellido : '',
    edad: ''
  }

  caracteresMaximos : number = 11
  caracteresMinimos : number = 4

  f: FormGroup

  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['',Validators.compose([
        Validators.required,
        Validators.maxLength(this.caracteresMaximos),
        Validators.minLength(this.caracteresMinimos),
        VerificarEspacios
      ])],
      apellido : '',
      edad: '',
      contacto: fb.group({
        email: '',
        telefono: ''
      })
    })
  }

  ngOnInit() {
  }

  enviar() {
    console.log(this.formu)
    this.formu = {
      nombre: '',
      apellido : '',
      edad: ''
    }
  }

  enviar2() {
    console.log(this.f.value)
  }


}
