import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username == 'test01' && this.password == 'test01') {
      this.router.navigate(['/tareas']);
    }
    else {
      this.username = '';
      this.password = '';
    }
  }
}
