import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  password = "";

  constructor(private auth: AuthService, private router: Router) {}

  async loginEmail() {
    try {
      await this.auth.loginWithEmail(this.email, this.password);
      this.router.navigate(['/flight-form']);
    } catch (err) {
      console.error('Login failed:', err);
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
