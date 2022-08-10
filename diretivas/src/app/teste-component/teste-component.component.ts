import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-teste-component',
	templateUrl: './teste-component.component.html',
	styleUrls: ['./teste-component.component.css'],
})
export class TesteComponentComponent implements OnInit {
	minhaVariavel: string = '';

	constructor() {}

	ngOnInit(): void {
		console.log('');
	}
}
