import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.scss']
})
export class VacunasComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Vacunas');
  }
}
