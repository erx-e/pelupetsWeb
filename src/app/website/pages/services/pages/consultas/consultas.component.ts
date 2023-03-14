import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ConsultasComponent implements OnInit {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Consultas');
  }
}
