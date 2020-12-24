import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { PageComponent } from './components/page/page.component';
import { MatPagesModule } from '@angular-material-extensions/pages';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    MaterialModule,
    MatPagesModule,
    SharedModule
  ]
})
export class WorksModule { }
