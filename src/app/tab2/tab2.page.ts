import { Component } from '@angular/core';
import { TareasService } from '../servicios/tareas.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public tareasService: TareasService) {}

}
