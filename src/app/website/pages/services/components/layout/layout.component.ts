import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private titleService: TitleService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.titleService.title$.subscribe((title) => {
      this.serviceTitle = title;
      this.cdr.detectChanges();
    });
  }
  serviceTitle: null | string = null;
}
