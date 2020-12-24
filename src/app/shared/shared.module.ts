import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CardTrabajoComponent } from './components/card-trabajo/card-trabajo.component';
import { CardWorkComponent } from './components/card-work/card-work.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [NavComponent, CardTrabajoComponent, CardWorkComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavComponent,
    CardTrabajoComponent,
    CardWorkComponent
  ]
})
export class SharedModule { }
