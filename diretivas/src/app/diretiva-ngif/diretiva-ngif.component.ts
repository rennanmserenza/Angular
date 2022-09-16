import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretiva-ngif',
	templateUrl: './diretiva-ngif.component.html',
	styleUrls: ['./diretiva-ngif.component.css'],
})
export class DiretivaNgifComponent implements OnInit {
	cursos: string[] = ['Angular 2', 'python 3'];

	mostrarCursos: boolean = false;

	constructor() {}

	ngOnInit(): void {
		console.log('started');
	}

	toogleMostrarCurso() {
		console.log(this.mostrarCursos);
		this.mostrarCursos = !this.mostrarCursos;
		console.log(this.mostrarCursos);
	}
}
