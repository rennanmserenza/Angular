import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appFundoAmarelo]',
})
export class FundoAmareloDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		//não utilizar códigos deste tipo, falhas de xxs
		//this.elementRef.nativeElement.style.backgroundColor = 'yellow';

		// -> setElementStyle deprecated
		// utilização segura
		this.renderer.setStyle(
			this.elementRef.nativeElement,
			'background-color',
			'yellow'
		);
	}
}
