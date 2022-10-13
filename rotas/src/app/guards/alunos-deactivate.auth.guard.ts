import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable({ providedIn: 'root' })
export class AlunosDeactivateGuard
	implements CanDeactivate<AlunoFormComponent>
{
	canDeactivate(
		alunoComponent: AlunoFormComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot
	): Observable<boolean> | boolean {
		return alunoComponent.podeMudarRota();
	}
}
