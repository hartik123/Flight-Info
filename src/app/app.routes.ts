import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FlightFormComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
