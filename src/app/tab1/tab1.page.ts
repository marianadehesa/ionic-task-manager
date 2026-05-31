import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.model';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page {

  constructor(public tareasService: TareasService, private alertController: AlertController, private router: Router) {

  }

  async agregarLista() {
    const alert = this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }
    ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },

        {
          text: 'Crear',

          handler: (data) => {
            if(data.titulo && data.titulo.trim().length>0){
            const listaId= this.tareasService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/agregar/${listaId}`)
              return true
            }
            else 
              {
              return false;
              }
          }
        }
      ]
    });

    (await alert).present()
  }

  seleccionarLista(lista: Lista){
    this.router.navigateByUrl(`/tabs/agregar/${lista.id}`)
  }
}