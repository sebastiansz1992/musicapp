import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { GenerosInteresComponent } from './pages/generos-interes/generos-interes.component';
import { CancionesInteresComponent } from './pages/canciones-interes/canciones-interes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio-sesion'
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent,
    pathMatch: 'full',
  },
  {
    path: 'formulario-registro',
    component: FormularioRegistroComponent,
    pathMatch: 'full',
  },
  {
    path: 'generos-interes',
    component: GenerosInteresComponent,
    pathMatch: 'full',
  },
  {
    path: 'canciones-interes',
    component: CancionesInteresComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
