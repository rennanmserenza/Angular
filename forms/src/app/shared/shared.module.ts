import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebuggerComponent } from './form-debugger/form-debugger.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
	declarations: [FormDebuggerComponent, CampoControlErroComponent],
	imports: [CommonModule],
	exports: [FormDebuggerComponent, CampoControlErroComponent],
})
export class SharedModule {}
