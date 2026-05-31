import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListasComponent } from './listas.component';



@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
  ],
  exports:[
    ListasComponent
  ],
})
export class ListasModule { }
