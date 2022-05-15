import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() control: FormControl = new FormControl();
  @Input() inputType: string = 'text';
  @Input() inputPlaceholder: string = '';

  ngOnInit(): void {}
}
