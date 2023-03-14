import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticosPorImagenComponent } from './diagnosticos-por-imagen.component';

describe('DiagnosticosPorImagenComponent', () => {
  let component: DiagnosticosPorImagenComponent;
  let fixture: ComponentFixture<DiagnosticosPorImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticosPorImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticosPorImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
