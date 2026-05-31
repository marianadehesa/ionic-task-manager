import { ListaItem } from "./lista-item-model";

export class Lista{
          id: number; 
          titulo: string;
          fechaCreacion: Date; 
          terminadaEn: Date | null;
          terminada: boolean;
          items: ListaItem[]

          constructor(titulo: string){
                    this.id= new Date().getTime();
                    this.titulo= titulo;
                    this.fechaCreacion= new Date();
                    this.terminadaEn= null;
                    this.terminada=false; 
                    this.items=[];
          }
}
