import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent {

  signupForm: FormGroup;
  roles = ['User', 'Admin'];
  errorMessage: string | null = null

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      placeKnown: [''],
      otherPlace: [''],
      role: ['User', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;

      this.registerUser(formValues).then(response => {
        this.router.navigate(['/ecommerce-site/home']);
      }).catch(error => {
        this.errorMessage = 'Registration failed. Please try again.';
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  registerUser(userData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email === 'test@example.com') {
          reject('User already exists');
        } else {
          resolve('User registered successfully');
        }
      }, 1000);
    });
  }


  onPlaceKnownChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target.value === 'Other') {
      this.signupForm.get('otherPlace')?.setValidators(Validators.required);
      this.signupForm.get('otherPlace')?.updateValueAndValidity();
    } else {
      this.signupForm.get('otherPlace')?.clearValidators();
      this.signupForm.get('otherPlace')?.updateValueAndValidity();
    }
  }
}
