import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-curso',
	templateUrl: './input-property.component.html',
	styleUrls: ['./input-property.component.css'], //,
	//inputs: ['nomeCurso:nome'],
})
export class InputPropertyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input('nome') nomeCurso: string = '';
}
