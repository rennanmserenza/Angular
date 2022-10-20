import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-template-form',
	templateUrl: './template-form.component.html',
	styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
	usuario: any = {
		nome: 'Rennan',
		email: 'rennan@teste.com',
	};

	constructor(private http: HttpClient) {}

	ngOnInit(): void {}

	verificaValid(campo: any) {
		return campo.valid;
	}

	verificaSubmit(formulario: any) {
		return formulario.submitted;
	}

	verificaCampoVazio(campo: any) {
		return campo.value == null || campo.value == '';
	}

	verificaSubmitOrTouched(campo: any, formulario: any) {
		return this.verificaSubmit(formulario) || campo.touched;
	}

	aplicaCssValidacao(campo: any, formulario: any) {
		return {
			'is-invalid':
				!this.verificaValid(campo) &&
				this.verificaSubmitOrTouched(campo, formulario),
			'is-valid':
				this.verificaValid(campo) &&
				this.verificaSubmitOrTouched(campo, formulario),
		};
	}

	chamaTextoObrigatorioReadonly(campo: any, formulario: any) {
		return (
			this.verificaSubmit(formulario) && this.verificaCampoVazio(campo)
		);
	}

	aplicaCssValidacaoReadonly(campo: any, formulario: any) {
		return {
			'is-invalid':
				this.verificaSubmit(formulario) &&
				this.verificaCampoVazio(campo),
			'is-valid':
				this.verificaSubmit(formulario) &&
				!this.verificaCampoVazio(campo),
		};
	}

	consultaCEP(cep: any, formulario: any) {
		let cepPesquisa = cep.value.replace(/\D/g, '');

		if (!this.verificaCampoVazio(cep.control)) {
			let validacep = /^[0-9]{8}$/;

			if (validacep.test(cepPesquisa)) {
				this.resetaDadosEnderecoForm(formulario);

				this.http
					.get(`https://viacep.com.br/ws/${cepPesquisa}/json/`)
					.subscribe((dados) =>
						this.consultaEstadoIBGE(dados, formulario)
					);
			}
		}
	}

	consultaEstadoIBGE(dados: any, formulario: any) {
		let uf = dados.uf;

		if (uf != null && uf != '' && uf != undefined) {
			this.http
				.get(
					`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`
				)
				.subscribe((nomeEstado: any) =>
					this.preencherDadosEnderecoForm(
						dados,
						formulario,
						nomeEstado
					)
				);
		}
	}

	resetaDadosEnderecoForm(formulario: any) {
		formulario.form.patchValue({
			endereco: {
				rua: null,
				bairro: null,
				cidade: null,
				estado: null,
				uf: null,
			},
		});
	}

	preencherDadosEnderecoForm(dados: any, formulario: any, estado: any) {
		formulario.form.patchValue({
			endereco: {
				cep: dados.cep,
				rua: dados.logradouro,
				bairro: dados.bairro,
				cidade: dados.localidade,
				estado: estado.nome,
				uf: dados.uf,
			},
		});

		// formulario.setValue({
		// 	nome: formulario.value.nome,
		// 	email: formulario.value.email,
		// 	endereco: {
		// 		cep: dados.cep,
		// 		rua: dados.logradouro,
		// 		numero: null,
		// 		complemento: null,
		// 		bairro: dados.bairro,
		// 		cidade: dados.localidade,
		// 		uf: dados.uf,
		// 		estado: estado.nome,
		// 	},
		// });
	}

	onSubmit(form: any) {
		console.log(form);

		this.http
			.post('https://httpbin.org/post', JSON.stringify(form.value))
			.pipe(map((res) => res))
			.subscribe((dados) => console.log(dados));

		// console.log(this.usuario);
	}
}
