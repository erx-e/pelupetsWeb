import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoDeMascotasComponent } from './cuidado-de-mascotas.component';

describe('CuidadoDeMascotasComponent', () => {
  let component: CuidadoDeMascotasComponent;
  let fixture: ComponentFixture<CuidadoDeMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadoDeMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadoDeMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
