import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { EspaciosComponent } from './components/espacios/espacios.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
          { path: '', redirectTo:'index', pathMatch: 'full'},
          { path: 'espacios', component: EspaciosComponent, data: { title: ':: Aero Angular :: Dashboard ::' }},
          { path: 'index', component: IndexComponent, data: { title: ':: Aero Angular :: Dashboard ::' }}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
