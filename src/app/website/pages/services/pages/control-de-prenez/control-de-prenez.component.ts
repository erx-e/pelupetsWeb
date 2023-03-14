import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-control-de-prenez',
  templateUrl: './control-de-prenez.component.html',
  styleUrls: ['./control-de-prenez.component.scss'],
})
export class ControlDePrenezComponent {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Control de preñez');
  }
}
