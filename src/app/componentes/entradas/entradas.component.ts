import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = 'Hola soy un mensaje'
  valor : number = 456
  valor2 : number = 789
  contador : number = 0
  valor3 : number = 321
  valor4 : number = 654

  constructor() { }

  ngOnInit() {
  }

  contar() {
    this.contador++
    console.log('contar',this.contador)
  }

  actualizar(e) {
    console.log('actualizar')
    let valor = e.target.value
    this.valor3 = valor
  }
}
