import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EmergenciaComponent } from './pages/emergencia/emergencia.component';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { PetFotosComponent } from './pages/pet-fotos/pet-fotos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandpageComponent,
      },
      {
        path: 'sobre-nosotros',
        component: SobreNosotrosComponent,
      },
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'servicios',
        loadChildren: () =>
          import('./pages/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'emergencia',
        component: EmergenciaComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'pet-fotos',
        component: PetFotosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
