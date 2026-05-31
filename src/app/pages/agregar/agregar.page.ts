import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item-model';
import { Lista } from 'src/app/models/lista.model';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: false,
})
export class AgregarPage implements OnInit {

  lista: Lista | undefined; 
  nombreItem= '';
  constructor(public tareasService: TareasService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const listaId= this.activatedRoute.snapshot.paramMap.get('listaId')
    this.lista=this.tareasService.obtenerLista(listaId!)
  }

  agregarTarea(){
    if (!this.lista) return;
    if (this.nombreItem.trim().length===0) return;

    const nuevoItem=new ListaItem(this.nombreItem)
    this.lista.items.push(nuevoItem)
    this.nombreItem='';
    this.tareasService.guardaLista();
  }

  cambioCheckbox(){
    this.tareasService.guardaLista();
    if(!this.lista){
      return;
    }
    const pendientes = this.lista?.items.filter((item)=>!item.completado).length;
    if (pendientes===0) {
      this.lista.terminada=true;
      this.lista.terminadaEn=new Date();
    }
    else{
      this.lista.terminada=false;
      this.lista.terminadaEn=null;
    }
    this.tareasService.guardaLista();
  }

  borraTarea(index: number){
    this.lista?.items.splice(index,1);
    this.tareasService.guardaLista();
  }
}
