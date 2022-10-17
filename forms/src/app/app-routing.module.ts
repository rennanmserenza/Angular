import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';

import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';

const routes: Routes = [
	{
		path: 'templateForm',
		component: TemplateFormComponent,
	},
	{
		path: 'dataForm',
		component: DataFormComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: '',
		redirectTo: 'templateForm',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: PaginaNaoEncontradaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
