import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    LandpageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
