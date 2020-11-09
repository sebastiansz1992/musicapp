import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario(): void {
    this.formRegistro = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
      confirmarContrasenia: ['', Validators.required]
    });
  }

  registrarse(): void {
    console.log(this.formRegistro.value);
  }

}
