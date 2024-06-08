// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Import FormsModule and CommonModule here
})
export class LoginComponent {
  user: User = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/employees']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    });
  }
}
