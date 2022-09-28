import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() control: UntypedFormControl = new UntypedFormControl();
  @Input() inputType: string = 'text';
  @Input() inputPlaceholder: string = '';
  @Input() format: string = '';

  ngOnInit(): void {}
}
