import {
	Directive,
	HostListener,
	HostBinding,
	Input,
	OnInit,
} from '@angular/core';

@Directive({
	selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
	@HostListener('mouseenter')
	onMouseOver() {
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') get SetColor() {
		return this.backgroundColor;
	}

	private backgroundColor: string;

	@Input() defaultColor: string = 'white';
	@Input('appHighlight') highlightColor: string = 'blue';

	constructor() {
		this.backgroundColor = '';
	}

	ngOnInit() {
		this.backgroundColor = this.defaultColor;
	}
}
