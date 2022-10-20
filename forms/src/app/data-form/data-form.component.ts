import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-data-form',
	templateUrl: './data-form.component.html',
	styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
	formulario!: FormGroup;
	constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

	ngOnInit(): void {
		// this.formulario = new FormGroup({
		// 	nome: new FormControl(null),
		// 	email: new FormControl(null),
		// });

		this.formulario = this.formBuilder.group({
			nome: [
				null,
				[Validators.required, Validators.pattern('^[a-zA-Zs]*$')],
			],
			email: [null, [Validators.required, Validators.email]],
		});
	}

	onSubmit() {
		console.log(this.formulario);
		console.log(this.formulario.value);

		this.http
			.post(
				'https://httpbin.org/post',
				JSON.stringify(this.formulario.value)
			)
			.pipe(map((res) => res))
			.subscribe(
				(dados) => {
					console.log(dados);
					this.resetar();
				},
				(error: any) => alert(`Erro: ${error}`)
			);

		// console.log(this.usuario);
	}

	resetar() {
		this.formulario.reset();
	}

	verificaValid(campo: any) {
		console.log(`Campo: ${campo}, valido? ${campo.valid}`);
		return campo.valid;
	}

	verificaSubmit(formulario: any) {
		return this.formulario;
	}

	verificaCampoVazio(campo: any) {
		let compoenente = this.formulario.get(campo);
		return compoenente?.value == null || compoenente?.value == '';
	}

	verificaSubmitOrTouched(campo: any) {
		// return this.verificaSubmit(formulario) || campo.touched;
		return campo.touched;
	}

	verificaValidAndTouched(campo: any) {
		let compoenente = this.formulario.get(campo);
		return !this.verificaValid(compoenente) && compoenente?.touched;
	}

	aplicaCssValidacao(campo: any) {
		let compoenente = this.formulario.get(campo);
		console.log(compoenente);
		return {
			'is-invalid':
				!this.verificaValid(compoenente) &&
				this.verificaSubmitOrTouched(compoenente),
			'is-valid':
				this.verificaValid(compoenente) &&
				this.verificaSubmitOrTouched(compoenente),
		};
	}

	verificaErrors(campo: any, tipo: string) {
		let compoenente = this.formulario.get(campo);

		return compoenente?.errors?.[tipo];
	}
}
