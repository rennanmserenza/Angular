import { Injectable } from '@angular/core';
import {
	Router,
	CanActivate,
	CanLoad,
	Route,
	UrlSegment,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private auth: AuthService, private router: Router) {}

	private verificarAcesso(): boolean {
		if (this.auth.usuarioEstaAutenticado()) {
			return true;
		}

		this.router.navigate(['/login']);

		return false;
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | Observable<boolean> {
		return this.verificarAcesso();
	}

	canLoad(
		route: Route,
		segments: UrlSegment[]
	): boolean | Observable<boolean> {
		return this.verificarAcesso();
	}
}
