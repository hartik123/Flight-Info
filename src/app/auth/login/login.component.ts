import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async login() {
    try {
      await this.auth.login();
      this.router.navigate(['/flight-form']); // redirect to flight form after login
    } catch (err) {
      console.error('Login failed', err);
    }
  }
}
