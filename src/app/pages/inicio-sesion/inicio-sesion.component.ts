import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  formInicioSesion: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario(): void {
    this.formInicioSesion = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  iniciarSesion(): void {
    console.log(this.formInicioSesion.value);
  }

}
