import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPipeImpuro'
})
export class FiltroPipeImpuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
