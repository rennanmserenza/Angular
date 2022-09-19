import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
	declarations: [AppComponent, ReceberCursoCriadoComponent],
	imports: [BrowserModule, CriarCursoModule, CursosModule],
	providers: [CursosService],
	bootstrap: [AppComponent],
})
export class AppModule {}
