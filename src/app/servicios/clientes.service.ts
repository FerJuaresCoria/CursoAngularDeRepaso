import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ICliente {
    comentarios: string,
    coordenadas: string,
    descripcion: string,
    foto: string,
    nombre: string    
}

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private URL : string = 'https://5c8ef17a3e557700145e85c7.mockapi.io/usuarios';

  constructor( private http: HttpClient ) { }

  getClientes() {
    return this.http.get<ICliente[]>(this.URL)
  }

  postCliente(cliente: ICliente) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post<ICliente>(this.URL, cliente, httpOptions)
  }

  deleteCliente(id:number) {
    return this.http.delete<ICliente>(this.URL+'/'+id)
  }

  putCliente(id:number, cliente:ICliente) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.put<ICliente>(this.URL+'/'+id, cliente, httpOptions)
  }


}
