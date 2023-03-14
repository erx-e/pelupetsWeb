import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { PeluqueriaComponent } from './pages/peluqueria/peluqueria.component';
import { HosteleriaComponent } from './pages/hosteleria/hosteleria.component';
import { DiagnosticosPorImagenComponent } from './pages/diagnosticos-por-imagen/diagnosticos-por-imagen.component';
import { CirugiaComponent } from './pages/cirugia/cirugia.component';
import { VacunasComponent } from './pages/vacunas/vacunas.component';
import { MedicinasComponent } from './pages/medicinas/medicinas.component';
import { DesparacitacionesComponent } from './pages/desparacitaciones/desparacitaciones.component';
import { CuidadoDeMascotasComponent } from './pages/cuidado-de-mascotas/cuidado-de-mascotas.component';
import { ControlDePrenezComponent } from './pages/control-de-prenez/control-de-prenez.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';



@NgModule({
  declarations: [
    ConsultasComponent,
    PeluqueriaComponent,
    HosteleriaComponent,
    DiagnosticosPorImagenComponent,
    CirugiaComponent,
    VacunasComponent,
    MedicinasComponent,
    DesparacitacionesComponent,
    CuidadoDeMascotasComponent,
    ControlDePrenezComponent,
    LayoutComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
