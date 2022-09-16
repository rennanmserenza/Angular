import { Component } from '@angular/core';

@Component({
	selector: 'app-diretiva-nngfor',
	templateUrl: './diretiva-nngfor.component.html',
	styleUrls: ['./diretiva-nngfor.component.css'],
})
export class DiretivaNngforComponent {
	cursos: string[] = ['Angular 2', 'Java', 'Python 3'];

	constructor() {}
}
