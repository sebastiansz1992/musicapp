import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesInteresComponent } from './canciones-interes.component';

describe('CancionesInteresComponent', () => {
  let component: CancionesInteresComponent;
  let fixture: ComponentFixture<CancionesInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
