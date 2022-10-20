import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebuggerComponent } from './form-debugger/form-debugger.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { CampoControlErroReadonlyComponent } from './campo-control-erro-readonly/campo-control-erro-readonly.component';

@NgModule({
	declarations: [
		FormDebuggerComponent,
		CampoControlErroComponent,
		CampoControlErroReadonlyComponent,
	],
	imports: [CommonModule],
	exports: [
		FormDebuggerComponent,
		CampoControlErroComponent,
		CampoControlErroReadonlyComponent,
	],
})
export class SharedModule {}
