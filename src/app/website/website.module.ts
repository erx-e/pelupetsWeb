import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { PetFotosComponent } from './pages/pet-fotos/pet-fotos.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EmergenciaComponent } from './pages/emergencia/emergencia.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    LandpageComponent,
    FooterComponent,
    ProductosComponent,
    PetFotosComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    EmergenciaComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    RouterModule,
  ]
})
export class WebsiteModule { }
