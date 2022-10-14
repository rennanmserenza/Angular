import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.auth.guard';
import { AlunosGuard } from './alunos/guards/alunos.auth.guard';

const routes: Routes = [
	{
		path: 'cursos',
		canActivate: [AuthGuard],
		canActivateChild: [CursosGuard],
		canLoad: [AuthGuard],
		loadChildren: () =>
			import('./cursos/cursos.module').then((x) => x.CursosModule),
	},
	{
		path: 'alunos',
		canActivate: [AuthGuard],
		canActivateChild: [AlunosGuard],
		canLoad: [AuthGuard],
		loadChildren: () =>
			import('./alunos/alunos.module').then((x) => x.AlunosModule),
	},
	{
		path: '',
		canActivate: [AuthGuard],
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
