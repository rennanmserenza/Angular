import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosRoutingModule } from './alunos-routing.module';

@NgModule({
	imports: [CommonModule, FormsModule, AlunosRoutingModule],
	exports: [],
	declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
	providers: [],
})
export class AlunosModule {}
