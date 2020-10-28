import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { GenerosInteresComponent } from './pages/generos-interes/generos-interes.component';
import { CancionesInteresComponent } from './pages/canciones-interes/canciones-interes.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    GenerosInteresComponent,
    CancionesInteresComponent,
    FormularioRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
