import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		let values = value.split(' ');
		let resultado = ' ';

		for (let v of values) {
			resultado += this.captalize(v);
		}
		return resultado;
	}

	captalize(value: string) {
		return (
			value.substring(0, 1).toUpperCase() +
			value.substring(1).toLowerCase()
		);
	}
}
