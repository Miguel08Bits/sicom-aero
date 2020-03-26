import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { EspaciosComponent } from './components/espacios/espacios.component';
import { EspacioUpdateComponent } from './components/espacio-update/espacio-update.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
          { path: '', redirectTo:'index', pathMatch: 'full'},
          { path: 'index', component: IndexComponent, data: { title: ':: Aero Angular :: Index ::' }},
          { path: 'espacios', component: EspaciosComponent, data: { title: ':: Aero Angular :: Espacios ::' }},
          { path: 'espacio-update/:id', component: EspacioUpdateComponent, data: { espacio: {} }},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
