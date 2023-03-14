import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesparacitacionesComponent } from './desparacitaciones.component';

describe('DesparacitacionesComponent', () => {
  let component: DesparacitacionesComponent;
  let fixture: ComponentFixture<DesparacitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesparacitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesparacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
