import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor( private  httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleados(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-a4f87-default-rtdb.europe-west1.firebasedatabase.app/datos.json'+ token);
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