import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
	providedIn: 'root',
})
export class AlunosService {
	private alunos: Aluno[] = [
		{ id: 1, nome: 'Rennan', email: 'rennan@email.com' },
		{ id: 2, nome: 'Fernanda', email: 'fernanda@email.com' },
		{ id: 3, nome: 'Eder', email: 'eder@email.com' },
		{ id: 4, nome: 'Vinicius', email: 'vinicius@email.com' },
		{ id: 5, nome: 'Claudiane', email: 'claudiane@email.com' },
	];

	constructor() {}

	getAlunos() {
		return this.alunos;
	}

	getAluno(id: number) {
		for (let aluno of this.alunos) {
			if (aluno.id == id) {
				return aluno;
			}
		}

		return null;
	}
}
