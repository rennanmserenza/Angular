import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		CursosComponent,
		CursoDetalheComponent,
		CursoNaoEncontradoComponent,
	],
	imports: [CommonModule, FormsModule, RouterModule],
	providers: [CursosService],
})
export class CursosModule {}
