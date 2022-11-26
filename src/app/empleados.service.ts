import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

  @Injectable()
    export class EmpleadosService{

    
    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){
      
    }
    
  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa Sección",3500),
    new Empleado("Laura","Lopez","Administración",2500),

  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+"\n" +
    empleado.nombre + "\n" + "Salario: "+ empleado.salario);

    this.empleados.push(empleado);
  }


}