import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UiButtonModule } from '../../../core/shared/components/button/button.module';

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
  svgIcon?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule, UiButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.style.scss'],
})
export class FooterModule {
  currentYear = new Date().getFullYear();

  aboutLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '#', icon: 'shield' },
    { label: 'Terms and conditions', href: '#', icon: 'description' },
    { label: 'Become an Affiliate', href: '#', icon: 'group_add' },
    { label: 'Login to Affiliate area', href: '#', icon: 'login' },
    { label: 'Emergency VPN', href: '#', icon: 'chat_bubble_outline' },
  ];

  platformLinks: FooterLink[] = [
    { label: 'VPN for Windows', href: '#', icon: 'window' },
    { label: 'VPN for Linux', href: '#', icon: 'terminal' },
    { label: 'VPN for iOS', href: '#', icon: 'apple' },
    { label: 'VPN for Android', href: '#', icon: 'android' },
    { label: 'VPN for Mac OS', href: '#', icon: 'laptop_mac' },
    { label: 'VPN for Vilfo', href: '#', icon: 'router' },
  ];
}
