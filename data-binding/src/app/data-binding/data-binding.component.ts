import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	nomeDoCurso: string = 'Angular';

	valorInicial: number = 15;

	onMudouValor(evento: any) {
		console.log(evento);
	}

	// valorAtual: string = '';
	// valorSalvo: string = '';

	// cursoAngular: boolean = true;
	// isMouseOver: boolean = false;

	// url: string = 'https://google.com.br';
	// urlImagem: string = 'https://picsum.photos/id/237/200/300';

	// getValor(): number {
	// 	return 1;
	// }

	// getCurtirCurso(): boolean {
	// 	return true;
	// }

	// botaoClicado() {
	// 	alert('Botão Clicado!');
	// }

	// onKeyUp(evento: KeyboardEvent) {
	// 	this.valorAtual = (<HTMLInputElement>evento.target).value;
	// }

	// salvarValor(valor: string) {
	// 	this.valorSalvo = valor;
	// }

	// onMouseOverOut() {
	// 	this.isMouseOver = !this.isMouseOver;
	// }
}
