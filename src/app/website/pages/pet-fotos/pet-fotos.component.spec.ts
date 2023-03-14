import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFotosComponent } from './pet-fotos.component';

describe('PetFotosComponent', () => {
  let component: PetFotosComponent;
  let fixture: ComponentFixture<PetFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
