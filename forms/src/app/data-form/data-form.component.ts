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
		this.formulario = this.formBuilder.group({
			nome: [
				null,
				[Validators.required, Validators.pattern('^[a-zA-Zs]*$')],
			],
			email: [null, [Validators.required, Validators.email]],
			endereco: this.formBuilder.group({
				cep: [null, [Validators.required]],
				numero: [null, [Validators.required]],
				complemento: [null],
				rua: [null, [Validators.required]],
				bairro: [null, [Validators.required]],
				cidade: [null, [Validators.required]],
				estado: [null, [Validators.required]],
				uf: [null, [Validators.required]],
			}),
		});
	}

	consultaCEP() {
		let cep = this.formulario.get('endereco.cep')?.value;

		let cepPesquisa = cep?.replace(/\D/g, '');

		if (!this.verificaCampoVazio('endereco.cep')) {
			let validacep = /^[0-9]{8}$/;

			if (validacep.test(cepPesquisa)) {
				this.resetaDadosEnderecoForm();

				this.http
					.get(`https://viacep.com.br/ws/${cepPesquisa}/json/`)
					.subscribe((dados) => this.consultaEstadoIBGE(dados));
			}
		}
	}

	consultaEstadoIBGE(dados: any) {
		let uf = dados.uf;

		if (uf != null && uf != '' && uf != undefined) {
			this.http
				.get(
					`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`
				)
				.subscribe((nomeEstado: any) =>
					this.preencherDadosEnderecoForm(dados, nomeEstado)
				);
		}
	}

	resetaDadosEnderecoForm() {
		this.formulario.patchValue({
			endereco: {
				rua: null,
				bairro: null,
				cidade: null,
				estado: null,
				uf: null,
			},
		});
	}

	preencherDadosEnderecoForm(dados: any, estado: any) {
		this.formulario.patchValue({
			endereco: {
				cep: dados.cep,
				rua: dados.logradouro,
				bairro: dados.bairro,
				cidade: dados.localidade,
				estado: estado.nome,
				uf: dados.uf,
			},
		});
	}

	verificaValid(campo: string) {
		let compoenente = this.formulario.get(campo);
		return compoenente?.valid;
	}

	verificaCampoVazio(campo: string) {
		let compoenente = this.formulario.get(campo);
		return compoenente?.value == null || compoenente?.value == '';
	}

	verificaSubmitOrTouched(campo: any) {
		// return this.verificaSubmit(formulario) || campo.touched;
		return campo.touched;
	}

	verificaValidAndTouched(campo: string) {
		let compoenente = this.formulario.get(campo);
		return !this.verificaValid(campo) && compoenente?.touched;
	}

	aplicaCssValidacao(campo: string) {
		let compoenente = this.formulario.get(campo);
		return {
			'is-invalid':
				!this.verificaValid(campo) &&
				this.verificaSubmitOrTouched(compoenente),
			'is-valid':
				this.verificaValid(campo) &&
				this.verificaSubmitOrTouched(compoenente),
		};
	}

	verificaErrors(campo: string, tipo: string) {
		let compoenente = this.formulario.get(campo);
		return compoenente?.errors?.[tipo];
	}

	chamaTextoObrigatorioReadonly(campo: string) {
		return this.verificaCampoVazio(campo);
	}

	resetar() {
		this.formulario.reset();
	}

	verificaValidacoesForm(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach((campo) => {
			console.log(campo);
			const controle = formGroup.get(campo);
			controle?.markAsTouched();

			if (controle instanceof FormGroup) {
				this.verificaValidacoesForm(controle);
			}
		});
	}

	onSubmit() {
		if (this.formulario.valid) {
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
		} else {
			Object.keys(this.formulario.controls).forEach((campo) => {
				const controle = this.formulario.get(campo);
				controle?.markAllAsTouched();

				// validação com touched com recursividade
				// this.verificaValidacoesForm(this.formulario);
			});
		}

		console.log(this.formulario);
	}
}
