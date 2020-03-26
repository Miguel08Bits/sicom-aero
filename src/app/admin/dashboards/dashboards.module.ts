import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { EspaciosComponent } from './components/espacios/espacios.component';
import { EspacioUpdateComponent } from './components/espacio-update/espacio-update.component';


@NgModule({
  declarations: [DashboardComponent, IndexComponent, EspaciosComponent, EspacioUpdateComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
