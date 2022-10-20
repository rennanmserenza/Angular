import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-campo-control-erro',
	templateUrl: './campo-control-erro.component.html',
	styleUrls: ['./campo-control-erro.component.css'],
})
export class CampoControlErroComponent implements OnInit {
	@Input() mostrarErro: boolean | undefined;
	@Input() listaValidators: string[] | undefined;
	@Input() mensagensErro: string[] | undefined;

	constructor() {}

	ngOnInit(): void {
		console.log(this.mostrarErro);
		console.log(this.listaValidators);
		console.log(this.mensagensErro);
	}
}
