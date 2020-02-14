import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { MimoduloModule } from './mimodulo/mimodulo.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';

import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

import { ResaltarDirective } from './directivas/resaltar.directive';

import { PanelComponent } from './mimodulo/componentes/panel/panel.component';
import { MimoduloModule2 } from './mimodulo2/mimodulo.module';
import { FamiliaComponent } from './mimodulo2/componentes/familia/familia.component';
import { UsuariosService, UsuariosServiceUseClass, UsuariosServiceUseExisting, functionUsuariosServiceUseFactory } from './servicios/usuarios.service';


const routes : Routes = [
  {path: '', redirectTo: 'entradas', pathMatch: 'full' },
  {path: 'entradas', component: EntradasComponent },
  {path: 'estructura', component: EstructuraComponent },
  {path: 'atributos', component: AtributosComponent },
  {path: 'formularios', component: FormulariosComponent },
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'panel', component: PanelComponent },
  {path: 'familia', component: FamiliaComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    UsuariosComponent,
    ClientesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {enableTracing : false}
    ),
    MimoduloModule,
    MimoduloModule2
  ],
  providers: [UsuariosService],
  /*
  providers: [
    // {provide: UsuariosService, useClass: UsuariosService }
    // {provide: UsuariosService, useClass: UsuariosServiceUseClass }
    // {provide: UsuariosService, useExisting: UsuariosServiceUseExisting }
    // {provide: UsuariosService, useFactory: functionUsuariosServiceUseFactory }
    {provide: UsuariosService, useValue: {
      usuarios : [
        'Maria useValue',
        'Jose useValue',
        'Pablo useValue',
        'Arturo useValue'
      ]
    }}
  ],
    */
  bootstrap: [AppComponent]
})
export class AppModule { }
