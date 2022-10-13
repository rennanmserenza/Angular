import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: 'cursos',
		loadChildren: () =>
			import('./cursos/cursos.module').then((x) => x.CursosModule),
	},
	{
		path: 'alunos',
		loadChildren: () =>
			import('./alunos/alunos.module').then((x) => x.AlunosModule),
	},
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
