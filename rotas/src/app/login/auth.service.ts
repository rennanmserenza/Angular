import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private usuarioAutenticado: boolean = false;
	mostrarMenuEmitter = new EventEmitter<boolean>();

	constructor(private router: Router) {}

	fazerLogin(usuario: Usuario) {
		if (usuario.nome === 'rennan.mendes' && usuario.senha === '651996') {
			this.usuarioAutenticado = true;
			this.router.navigate(['/']);
		} else {
			this.usuarioAutenticado = false;
		}

		this.mostrarMenu();
	}

	mostrarMenu() {
		this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
	}
}
