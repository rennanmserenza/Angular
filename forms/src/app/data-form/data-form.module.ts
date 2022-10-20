import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [DataFormComponent],
	imports: [CommonModule, ReactiveFormsModule, SharedModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataFormModule {}
