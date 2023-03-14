import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-diagnosticos-por-imagen',
  templateUrl: './diagnosticos-por-imagen.component.html',
  styleUrls: ['./diagnosticos-por-imagen.component.scss']
})
export class DiagnosticosPorImagenComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Diagnóstico por imagen');
  }
}
