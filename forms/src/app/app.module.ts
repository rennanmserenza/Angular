import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './core/login/login.component';
import { DataFormComponent } from './data-form/data-form.component';
import { HomeComponent } from './core/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		PaginaNaoEncontradaComponent,
	],
	imports: [
		TooltipModule.forRoot(),
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		TemplateFormModule,
		DataFormModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
