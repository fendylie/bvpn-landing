import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';

export interface UiAccordionItem {
  id: string;
  label: string;
  content?: string;
}

@Component({
  selector: 'ui-accordion',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.style.scss'],
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('180ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class UiAccordionModule {
  @Input() items: UiAccordionItem[] = [];
  @Input() categoryTitle = '';

  openId = signal<string | null>(null);

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }

  isOpen(id: string): boolean {
    return this.openId() === id;
  }
}
