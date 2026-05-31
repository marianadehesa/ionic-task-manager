import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
@Injectable({
  providedIn: 'root',
})
export class TareasService {
    listas: Lista[]=[];

    constructor(){
        //const lista1= new Lista("Tareas academicas");
        //const lista2= new Lista("Tareas personales"); 
        //this.listas.push(lista1, lista2);

        this.cargaLista();
        
    }

    crearLista(titulo: string){
        const nuevaLista= new Lista(titulo)
        this.listas.push(nuevaLista)
        this.guardaLista();
        return nuevaLista.id;
    }

    guardaLista(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargaLista(){
        const data = localStorage.getItem('data');
        if (data) {
            this.listas=JSON.parse(data);
        }
        else{
            this.listas=[];
        }
    }

    obtenerLista(id: string | number){
        id=Number(id);
        return this.listas.find(lista=>lista.id===id)
    }
}