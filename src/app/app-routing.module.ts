import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';


const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'listar-libros/:idPersona', component: ListarLibrosComponent},
  {path: 'agregar-libro/:idPersona', component: AgregarLibroComponent},
  {path: 'editar-libro/:id', component: EditarLibroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
