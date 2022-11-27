import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor( private  httpClient:HttpClient){}

    cargarEmpleados(){

        return this.httpClient.get('https://mis-clientes-a4f87-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

 
 
    guardarEmpleados(empleados:Empleado[]){
 
        this.httpClient.put('https://mis-clientes-a4f87-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
            
        response=>console.log("Se han guardado los empleados:" + response),

        error=>console.error("Error: "+ error),
        
        );
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url='https://mis-clientes-a4f87-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        
        this.httpClient.put(url,empleado).subscribe(
            
        response=>console.log("Se ha modifiacado correctamente el empleados:" + response),

        error=>console.error("Error: "+ error),
        
        );
    }

        eliminarEmpleado(indice:number){
            let url='https://mis-clientes-a4f87-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    
            
            this.httpClient.delete(url).subscribe(
                
            response=>console.log("Se ha eliminado correctamente el empleados:" + response),
    
            error=>console.error("Error: "+ error),
            
            );
        
    
    }

}