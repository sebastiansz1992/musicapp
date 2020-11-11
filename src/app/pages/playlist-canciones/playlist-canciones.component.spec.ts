import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCancionesComponent } from './playlist-canciones.component';

describe('PlaylistCancionesComponent', () => {
  let component: PlaylistCancionesComponent;
  let fixture: ComponentFixture<PlaylistCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
