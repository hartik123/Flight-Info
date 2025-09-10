import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  async signupEmail() {
    try {
      await this.auth.signup(this.email, this.password);
      this.router.navigate(['/flight-form']); // redirect after signup
    } catch (err: any) {
      console.error('Signup failed:', err);
      this.errorMessage = err.message.substring(10) || 'Signup failed, please try again.';
    }
  }

    async loginGoogle() {
    try {
      await this.auth.loginWithGoogle();
      this.router.navigate(['/flight-form']); // redirect to flight form after login
    } catch (err) {
      console.error('Login failed', err);
    }
  }
}
