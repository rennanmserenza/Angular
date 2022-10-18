import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { FormDebuggerComponent } from '../form-debugger/form-debugger.component';

@NgModule({
	declarations: [TemplateFormComponent, FormDebuggerComponent],
	imports: [CommonModule, FormsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemplateFormModule {}
