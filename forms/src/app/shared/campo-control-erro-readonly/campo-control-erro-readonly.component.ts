import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-campo-control-erro-readonly',
	templateUrl: './campo-control-erro-readonly.component.html',
	styleUrls: ['./campo-control-erro-readonly.component.css'],
})
export class CampoControlErroReadonlyComponent implements OnInit {
	@Input() mostrarErro: boolean | undefined;
	@Input() mensagemErro: string | undefined;

	constructor() {}

	ngOnInit(): void {}
}
