import { Component, OnInit, ViewChild  } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';


@Component({
  selector: 'app-madre',
  templateUrl: './madre.component.html',
  styleUrls: ['./madre.component.css']
})
export class MadreComponent implements OnInit  {

  @ViewChild(HijoComponent, {static: false}) hijo : HijoComponent;

  mensaje : string = '';

  constructor() { 
    console.log('constructor madre');
  }

  ngOnInit() {
    console.log('ngOnInit madre');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy madre');
  }

  escuchar() {
    this.mensaje = this.hijo.respuestaAlPadre;
  }
}
