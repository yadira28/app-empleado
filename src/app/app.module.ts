import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes} from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPerzonalizadoComponent } from './error-perzonalizado/error-perzonalizado.component';
import { DataServices } from './data.services';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { LoginService } from './login/login.service';
import {CookieService} from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent ,  canActivate:[LoginGuardian]},
  {path:'contacto', component:ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:ErrorPerzonalizadoComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
