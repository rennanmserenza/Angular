import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-form-debugger',
	templateUrl: './form-debugger.component.html',
	styleUrls: ['./form-debugger.component.css'],
})
export class FormDebuggerComponent implements OnInit {
	@Input() form: any;

	constructor() {}

	ngOnInit(): void {}
}
