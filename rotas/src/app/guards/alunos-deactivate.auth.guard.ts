import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './form-candeactivate.interface';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable({ providedIn: 'root' })
export class AlunosDeactivateGuard
	implements CanDeactivate<IFormCanDeactivate>
{
	canDeactivate(
		component: IFormCanDeactivate,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot
	): Observable<boolean> | boolean {
		return component.podeDesativar();
	}
}
