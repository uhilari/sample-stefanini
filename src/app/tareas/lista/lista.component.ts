import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  tareas = [
    "Tarea 01",
    "Tarea 02",
    "Tarea 03",
    "Tarea 04",
    "Tarea 05",
  ]
}
