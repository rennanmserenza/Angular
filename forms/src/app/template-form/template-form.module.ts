import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { FormDebuggerComponent } from '../form-debugger/form-debugger.component';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';

@NgModule({
	declarations: [
		TemplateFormComponent,
		FormDebuggerComponent,
		CampoControlErroComponent,
	],
	imports: [CommonModule, FormsModule, HttpClientModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemplateFormModule {}
