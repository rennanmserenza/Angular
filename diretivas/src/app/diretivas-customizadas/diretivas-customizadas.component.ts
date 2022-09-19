import { Component } from '@angular/core';

@Component({
	selector: 'app-diretivas-customizadas',
	templateUrl: './diretivas-customizadas.component.html',
	styleUrls: ['./diretivas-customizadas.component.css'],
})
export class DiretivasCustomizadasComponent {
	cursos: string[] = ['Angular 2', 'python 3'];

	mostrarCursos: boolean = false;
	constructor() {}

	toogleMostrarCurso() {
		this.mostrarCursos = !this.mostrarCursos;
	}
}
