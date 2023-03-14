import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-desparacitaciones',
  templateUrl: './desparacitaciones.component.html',
  styleUrls: ['./desparacitaciones.component.scss']
})
export class DesparacitacionesComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Desparacitaciones');
  }
}
