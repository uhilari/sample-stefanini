import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './tareas/lista/lista.component';

export const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'tareas',
  component: ListaComponent
}];
