import { Component, OnInit } from '@angular/core';
import { ClientesService, ICliente } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : ICliente[] = []

  constructor(private clientesService : ClientesService) { }

  ngOnInit() {
  }

  obtenerClientes() {
    this.clientesService.getClientes()
      .subscribe( (datos:ICliente[]) => {
        console.log(datos)
        this.clientes = datos
      })
  }

  enviarCliente() {
    let cliente:ICliente = {
      comentarios: "Hola!",
      coordenadas: "123456",
      descripcion: "Curso Angular 8",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png",
      nombre: "Daniel"      
    }
    this.clientesService.postCliente(cliente)
      .subscribe( (dato:ICliente) => {
        console.log(dato)
        this.obtenerClientes()
      })
  }

  borrarCliente(id:number) {
    this.clientesService.deleteCliente(id)
      .subscribe( (dato:ICliente) => {
        console.log(dato)
        this.obtenerClientes()
      })
  }

  actualizarCliente(id:number) {
    let cliente:ICliente = {
      comentarios: "Como están!",
      coordenadas: "654321",
      descripcion: "Curso ReactJS",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png",
      nombre: "Ana"      
    }
    this.clientesService.putCliente(id,cliente)
      .subscribe( (dato:ICliente) => {
        console.log(dato)
        this.obtenerClientes()
      })
  }


}
