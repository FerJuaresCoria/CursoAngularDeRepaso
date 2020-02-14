import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : string[] = []
  mensajes : string[] = []
  mensajeAux : string = ''

  constructor( private usuariosService:UsuariosService ) {
    this.usuarios = this.usuariosService.usuarios
    this.mensajes = this.usuariosService.getMensajes()
  }

  pushMensaje(mensaje:string) {
    if(mensaje != '') {
      this.usuariosService.pushMensaje('USUARIOS: ' + mensaje)
    }
  }

  popMensaje() {
    this.usuariosService.popMensaje()
  }

  ngOnInit() {
  }

}
