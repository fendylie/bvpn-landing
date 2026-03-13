import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './shared/components/header/header.module';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { FooterModule } from './shared/components/footer/footer.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderModule,
    FooterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('bvpn-landing');
}
