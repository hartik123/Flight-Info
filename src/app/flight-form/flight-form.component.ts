import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightInfoPayload } from '../models';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import {environment} from "../../environments/environment"


@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {
  name='';
  airline = '';
  arrivalDate = '';
  arrivalTime = '';
  flightNumber = '';
  numOfGuests: number | null = null;
  comments = '';

  loading = false;
  message = '';
  error = '';

  user: User | null = null;

  constructor(private router: Router, private http: HttpClient, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(){
    this.auth.user$.subscribe(u => {
    this.user = u;
    console.log('Current user:', u); // check photoURL here
  });
  }

  resetForm() {
    this.name = '';
    this.airline = '';
    this.arrivalDate = '';
    this.arrivalTime = '';
    this.flightNumber = '';
    this.numOfGuests = null;
    this.comments = '';
  }

  submitForm() {

    this.message = '';
    this.error = '';
    if (!this.name || !this.airline || !this.arrivalDate || !this.arrivalTime || !this.flightNumber || this.numOfGuests === null) {
      this.error = 'Please fill in all required fields.';
      return;
    }
    this.loading = true;
    const url = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': environment.flightApiToken,
      'candidate': this.name
    });
    const payload: FlightInfoPayload = {
      airline: this.airline,
      arrivalDate: this.arrivalDate,
      arrivalTime: this.arrivalTime,
      flightNumber: this.flightNumber,
      numOfGuests: this.numOfGuests,
      comments: this.comments || undefined
    };
    console.log(payload)

    if (this.comments) payload.comments = this.comments;
    this.http.post(url, payload, { headers }).subscribe({
      next: (res) => {
        console.log('Response from server:', res);
        this.showSuccess('Flight info submitted successfully!');
        this.message = '';
        this.resetForm();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error response:', err);
        this.error = 'Submission failed. Please check your details and try again.';
        this.loading = false;
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  showSuccess(message: string) {
    this.toastr.success(message, '' , {
      timeOut: 3000,
    });
  }
}
