/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-exemplos-pipes',
	templateUrl: './exemplos-pipes.component.html',
	styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
	livro: any = {
		titulo: 'the clean Code',
		rating: 4.87347,
		numeroPaginas: 431,
		preco: 70.99,
		dataLancamento: new Date(2009, 8, 8),
		url: 'https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=d_pd_sbs_sccl_2_1/147-8377741-7215865?pd_rd_w=mabbD&content-id=amzn1.sym.4e54af11-91e7-41b0-af49-07bca5d2336e&pf_rd_p=4e54af11-91e7-41b0-af49-07bca5d2336e&pf_rd_r=SMJPV9GSZKMXH5W2QB37&pd_rd_wg=1iFm7&pd_rd_r=dd35ffaf-7630-42cd-be69-1bc09fd99040&pd_rd_i=8576082675&psc=1',
	};

	livros: string[] = ['Java', 'Angular 2'];

	filtro: string = '';

	addCurso(valor: string) {
		this.livros.push(valor);
	}

	obterCursos() {
		if (
			this.livros.length === 0 ||
			this.filtro === undefined ||
			this.filtro.trim() === ''
		) {
			return this.livros;
		}

		return this.livros.filter((v: string) => {
			return v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
				? true
				: false;
		});
	}

	valorAsync = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Valor assíncrono'), 2000);
	});

	valorAsync2 = interval(3000).pipe(map(() => 'Valor assíncrono 2'));

	constructor() {}

	ngOnInit(): void {}
}
