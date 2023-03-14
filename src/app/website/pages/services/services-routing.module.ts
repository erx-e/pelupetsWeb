import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CirugiaComponent } from './pages/cirugia/cirugia.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ControlDePrenezComponent } from './pages/control-de-prenez/control-de-prenez.component';
import { CuidadoDeMascotasComponent } from './pages/cuidado-de-mascotas/cuidado-de-mascotas.component';
import { DesparacitacionesComponent } from './pages/desparacitaciones/desparacitaciones.component';
import { DiagnosticosPorImagenComponent } from './pages/diagnosticos-por-imagen/diagnosticos-por-imagen.component';
import { HosteleriaComponent } from './pages/hosteleria/hosteleria.component';
import { MedicinasComponent } from './pages/medicinas/medicinas.component';
import { PeluqueriaComponent } from './pages/peluqueria/peluqueria.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VacunasComponent } from './pages/vacunas/vacunas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ServiciosComponent,
      },
      {
        path: 'consultas',
        component: ConsultasComponent,
      },
      {
        path: 'control-de-preñez',
        component: ControlDePrenezComponent,
      },
      {
        path: 'hosteleria',
        component: HosteleriaComponent,
      },
      {
        path: 'peluqueria',
        component: PeluqueriaComponent,
      },
      {
        path: 'medicinas',
        component: MedicinasComponent,
      },
      {
        path: 'vacunas',
        component: VacunasComponent,
      },
      {
        path: 'desparacitaciones',
        component: DesparacitacionesComponent,
      },
      {
        path: 'cuidado-de-mascotas',
        component: CuidadoDeMascotasComponent,
      },
      {
        path: 'diagnosticos-por-imagen',
        component: DiagnosticosPorImagenComponent,
      },
      {
        path: 'cirugia',
        component: CirugiaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
