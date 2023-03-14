import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-cirugia',
  templateUrl: './cirugia.component.html',
  styleUrls: ['./cirugia.component.scss'],
})
export class CirugiaComponent implements OnInit {
  constructor(private serviceTitle: TitleService) {}
  ngOnInit(): void {
    this.serviceTitle.title.next('Cirugía');
  }
}
