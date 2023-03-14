import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-cuidado-de-mascotas',
  templateUrl: './cuidado-de-mascotas.component.html',
  styleUrls: ['./cuidado-de-mascotas.component.scss']
})
export class CuidadoDeMascotasComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Cuidado de mascotas');
  }
}
