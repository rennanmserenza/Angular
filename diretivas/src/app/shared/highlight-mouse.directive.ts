import { style } from '@angular/animations';
import {
	Directive,
	HostListener,
	HostBinding,
	ElementRef,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[appHighlightMouse]',
})
export class HighlightMouseDirective {
	@HostListener('mouseenter')
	onMouseOver() {
		// 	this.renderer.setStyle(
		// 		this.elementRef.nativeElement,
		// 		'background-color',
		// 		'blue'
		// 	);
		this.backgroundColor = 'blue';
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		// 	this.renderer.setStyle(
		// 		this.elementRef.nativeElement,
		// 		'background-color',
		// 		'white'
		// 	);
		this.backgroundColor = 'white';
	}

	//@HostBinding('style.backgroundColor') backgroundColor: string;
	@HostBinding('style.backgroundColor') get SetColor() {
		return this.backgroundColor;
	}

	private backgroundColor: string;

	constructor() {
		//private elementRef: ElementRef, private renderer: Renderer2
		this.backgroundColor = '';
	}
}
