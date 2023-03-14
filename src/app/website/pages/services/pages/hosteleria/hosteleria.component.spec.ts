import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosteleriaComponent } from './hosteleria.component';

describe('HosteleriaComponent', () => {
  let component: HosteleriaComponent;
  let fixture: ComponentFixture<HosteleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosteleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HosteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
