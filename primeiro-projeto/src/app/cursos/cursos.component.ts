import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cursos-component',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
	url: string = 'http://loiane.traineng';

	cursos: string[];
	
	constructor(private cursosService: CursosService) {
		this.cursos = this.cursosService.getCursos();
	}

	ngOnInit(): void {}
}
