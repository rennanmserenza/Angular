import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CursosService {
	emitirCursoCriado = new EventEmitter<string>();
	static criouNovoCurso = new EventEmitter<string>();

	private cursos: string[] = ['Angular2', 'Python', 'Java'];

	constructor() {
		console.log('startei');
	}

	getCursos() {
		return this.cursos;
	}

	AddCurso(curso: string) {
		this.cursos.push(curso);
		this.emitirCursoCriado.emit(curso);
		CursosService.criouNovoCurso.emit(curso);
		console.log('Um novo curso foi adicionadoo');
	}
}
