import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'contador',
	templateUrl: './output-property.component.html',
	styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() valor: number = 0;
	@Output() mudouValor = new EventEmitter();
	@ViewChild('campoInput') campoValorInput!: ElementRef;

	incrementa() {
		if (this.valor < 20) {
			this.campoValorInput.nativeElement.value++;
			this.emiteValorNovo();
		}
	}

	decrementa() {
		if (this.valor > 0) {
			this.campoValorInput.nativeElement.value--;
			this.emiteValorNovo();
		}
	}

	emiteValorNovo() {
		this.mudouValor.emit({ novoValor: this.valor });
	}
}
