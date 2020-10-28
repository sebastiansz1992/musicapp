import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosInteresComponent } from './generos-interes.component';

describe('GenerosInteresComponent', () => {
  let component: GenerosInteresComponent;
  let fixture: ComponentFixture<GenerosInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
