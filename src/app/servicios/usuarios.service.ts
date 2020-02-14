import { Injectable } from '@angular/core';


// --------------------------------
//  useFactory
// --------------------------------
class UsuariosServiceUseFactory {
  
  usuarios : string[] = [
    'Maria useFactory',
    'Jose useFactory',
    'Pablo useFactory',
    'Arturo useFactory'
  ]

  constructor() { }
}

export function functionUsuariosServiceUseFactory () {
  console.log('EJECUCIÓN EN: functionUsuariosServiceUseFactory()')
  return new UsuariosServiceUseFactory()
}

// --------------------------------
//  useExisting
// --------------------------------
@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceUseExisting {

  usuarios : string[] = [
    'Maria useExisting',
    'Jose useExisting',
    'Pablo useExisting',
    'Arturo useExisting'
  ]

  constructor() { }
}
// --------------------------------

// --------------------------------
//  useClass
// --------------------------------
export class UsuariosServiceUseClass {

  usuarios : string[] = [
    'Maria useClass',
    'Jose useClass',
    'Pablo useClass',
    'Arturo useClass'
  ]

  constructor() { }
}

// --------------------------------
//  Servicio Original
// --------------------------------
@Injectable(/* {
  providedIn: 'root'
} */)
export class UsuariosService {

  usuarios : string[] = [
    'Maria',
    'Jose',
    'Pablo',
    'Arturo'
  ]
  
  private mensajes : string[] = []

  pushMensaje(mensaje: string) {
    this.mensajes.push(mensaje)
  }

  popMensaje() {
    this.mensajes.pop()
  }

  getMensajes() {
    return this.mensajes
  }

  constructor() { }
}
