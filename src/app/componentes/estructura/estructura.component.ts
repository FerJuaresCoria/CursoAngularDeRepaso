import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar : boolean = true
  //personas : Array<string> = [
  personas : string[] = [
    'Pedro',
    'Juan',
    'Maria',
    'Ana'
  ]

  alumnos = [
    {nombre: 'Juan', apellido:'Perez', edad: 34, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
    {nombre: 'Pablo', apellido:'Gonzalez', edad: 27, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png'},
    {nombre: 'Ana', apellido:'Picos', edad: 31, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
    {nombre: 'Lucia', apellido:'Alvarez', edad: 22, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'}
  ]

  usuarios : string[] = []
  mensajes : string[] = []
  mensajeAux : string = ''

  constructor( private usuariosService:UsuariosService ) {
    this.usuarios = this.usuariosService.usuarios
    this.mensajes = this.usuariosService.getMensajes()
  }

  pushMensaje(mensaje:string) {
    if(mensaje != '') {
      this.usuariosService.pushMensaje('ESTRUCTURA: ' + mensaje)
    }
  }

  popMensaje() {
    this.usuariosService.popMensaje()
  }

  ngOnInit() {
  }

  borrar(i) {
    this.alumnos.splice(i,1)
  }

  agregar() {
    let alumno = {nombre: 'Diego', apellido:'Bezzola', edad: 29, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'}

    this.alumnos.push(alumno)
  }

}
