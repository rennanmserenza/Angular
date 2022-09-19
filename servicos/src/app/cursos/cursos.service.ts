import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
	providedIn: 'root',
})
export class CursosService {
	emitirCursoCriado = new EventEmitter<string>();
	static criouNovoCurso = new EventEmitter<string>();

	private cursos: string[] = ['Angular2', 'Python', 'Java'];

	constructor(private logService: LogService) {
		console.log('startei');
	}

	getCursos() {
		this.logService.consoleLog('Obtendo lista de Cursos');
		return this.cursos;
	}

	AddCurso(curso: string) {
		this.logService.consoleLog(`Criando um novo curso: ${curso}`);
		this.cursos.push(curso);
		this.emitirCursoCriado.emit(curso);
		CursosService.criouNovoCurso.emit(curso);
		console.log('Um novo curso foi adicionadoo');
	}
}
