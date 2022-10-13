import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
	selector: 'app-aluno-form',
	templateUrl: './aluno-form.component.html',
	styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
	aluno: any;
	formMudou: boolean = false;
	inscricao: Subscription = new Subscription();

	constructor(
		private route: ActivatedRoute,
		private alunosService: AlunosService
	) {}

	onInput() {
		this.formMudou = true;
	}

	podeMudarRota() {
		if (this.formMudou) {
			confirm(
				'Os dados foram alterados, se você sair da página irá perde-los, deseja prosseguir?'
			);
		}

		return true;
	}

	ngOnInit(): void {
		this.inscricao = this.route.params.subscribe((params: any) => {
			let id = params['id'];

			this.aluno = this.alunosService.getAluno(id);

			if (this.aluno === null) {
				this.aluno = {};
			}
		});
	}

	ngOnDestroy(): void {
		this.inscricao.unsubscribe();
	}
}
