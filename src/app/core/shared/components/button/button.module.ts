import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export enum ButtonTypeEnum {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonVariantEnum {
  TEXT = 'text',
  FILLED = 'filled',
  TONAL = 'tonal',
  OUTLINED = 'outlined',
  ELEVATED = 'elevated',
}

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.style.scss'],
})
export class UiButtonModule {
  @Input() label: string = 'Button';
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.BUTTON;
  @Input() variant: ButtonVariantEnum = ButtonVariantEnum.FILLED;
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    this.clicked.emit(event);
  }
}
