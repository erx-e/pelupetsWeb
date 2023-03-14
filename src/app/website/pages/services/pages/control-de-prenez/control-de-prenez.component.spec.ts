import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDePrenezComponent } from './control-de-prenez.component';

describe('ControlDePrenezComponent', () => {
  let component: ControlDePrenezComponent;
  let fixture: ComponentFixture<ControlDePrenezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDePrenezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDePrenezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
