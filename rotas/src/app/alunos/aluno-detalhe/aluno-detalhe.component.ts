import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
	selector: 'app-aluno-detalhe',
	templateUrl: './aluno-detalhe.component.html',
	styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit {
	aluno: Aluno | undefined;
	inscricao: Subscription = new Subscription();

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private alunosService: AlunosService
	) {}

	editarContato() {
		this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
	}

	ngOnInit(): void {
		this.inscricao = this.route.data.subscribe((info: any) => {
			console.log(info);
			this.aluno = info.aluno;
		});
	}

	ngOnDestroy(): void {
		this.inscricao.unsubscribe();
	}
}
