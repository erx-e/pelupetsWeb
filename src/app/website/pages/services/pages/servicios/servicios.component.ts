import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next("Servicios");
  }
}
