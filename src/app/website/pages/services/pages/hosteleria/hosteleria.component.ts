import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-hosteleria',
  templateUrl: './hosteleria.component.html',
  styleUrls: ['./hosteleria.component.scss']
})
export class HosteleriaComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Hostelería');
  }
}
