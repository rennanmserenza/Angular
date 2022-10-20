import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [TemplateFormComponent],
	imports: [CommonModule, FormsModule, SharedModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemplateFormModule {}
