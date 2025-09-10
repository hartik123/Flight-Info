import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { authGuard } from './core/guards/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  { path: 'flight-form', component: FlightFormComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
