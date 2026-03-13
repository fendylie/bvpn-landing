import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss'],
})
export class LoginModule {
  form: FormGroup;
  hidePassword = signal(true);
  isLoading = signal(false);
  loginError = signal('');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePassword(): void {
    this.hidePassword.update((v) => !v);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.loginError.set('');

    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
      // Handle response here
      console.log('Login submitted:', this.form.value);
    }, 1500);
  }

  getEmailError(): string {
    const ctrl = this.form.get('email');
    if (ctrl?.hasError('required')) return 'Email address is required';
    if (ctrl?.hasError('email')) return 'Please enter a valid email address';
    return '';
  }

  getPasswordError(): string {
    const ctrl = this.form.get('password');
    if (ctrl?.hasError('required')) return 'Password is required';
    if (ctrl?.hasError('minlength')) return 'Password must be at least 6 characters';
    return '';
  }
}
