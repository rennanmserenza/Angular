import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CursosService {
	private cursos: string[] = ['Angular2', 'Python', 'Java'];

	constructor() {
		console.log('startei');
	}

	getCursos() {
		return this.cursos;
	}

	AddCurso(curso: string) {
		this.cursos.push(curso);
		console.log('Um novo curso foi adicionadoo');
	}
}
