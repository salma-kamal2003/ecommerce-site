import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.errorMessage = this.validateUser(email, password);
    this.loginForm.reset();
  }

  validateUser(email: string, password: string): string | null {
    const mockUser = {
      email: 'example@example.com',
      password: 'password123',
    };

    if (email !== mockUser.email || password !== mockUser.password) {
      return 'User not found, please signup';
    }
    this.router.navigate(['/ecommerce-site/home'])

    return null;
  }
}
