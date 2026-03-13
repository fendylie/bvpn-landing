import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.style.scss'],
})
export class ContactUsModule {
  form: FormGroup;
  isSubmitting = signal(false);

  // Rich text toolbar actions (UI only)
  toolbarActions = [
    { icon: 'format_bold', label: 'Bold' },
    { icon: 'format_italic', label: 'Italic' },
    { icon: 'format_underlined', label: 'Underline' },
    { icon: 'format_list_bulleted', label: 'Bullet list' },
    { icon: 'format_list_numbered', label: 'Numbered list' },
    { icon: 'image', label: 'Insert image' },
    { icon: 'format_color_text', label: 'Text color' },
    { icon: 'link', label: 'Insert link' },
  ];

  socialLinks = [
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'Twitter', icon: 'twitter', href: '#' },
    { label: 'Teamviewer', icon: 'cast', href: '#' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      requester: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSendEmail(): void {
    // Empty function — wire up to your API
  }
}
