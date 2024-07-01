import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from './login/login.module';
import { TareasModule } from './tareas/tareas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModule, TareasModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
