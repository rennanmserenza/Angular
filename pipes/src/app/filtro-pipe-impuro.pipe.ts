/* eslint-disable @angular-eslint/use-pipe-transform-interface */
import { Pipe } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
	name: 'filtroArrayImpuro',
	pure: false,
})
export class FiltroPipeImpuroPipe extends FiltroArrayPipe {}
