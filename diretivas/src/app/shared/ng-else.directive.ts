import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ngElse]',
})
export class NgElseDirective {
	cursos: string[] = ['Angular 2', 'python 3'];

	@Input() set ngElse(condition: boolean) {
		if (!condition) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef
	) {}
}
