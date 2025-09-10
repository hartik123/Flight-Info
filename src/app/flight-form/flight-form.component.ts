import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {
  airline = '';
  arrivalDate = '';
  arrivalTime = '';
  flightNumber = '';
  numOfGuests: number | null = null;
  comments = '';

  loading = false;
  message = '';
  error = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.message = '';
    this.error = '';
    if (!this.airline || !this.arrivalDate || !this.arrivalTime || !this.flightNumber || this.numOfGuests === null) {
      this.error = 'Please fill in all required fields.';
      return;
    }
    this.loading = true;
    const url = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Hartik Suhagiya'
    });
    const payload: any = {
      airline: this.airline,
      arrivalDate: this.arrivalDate,
      arrivalTime: this.arrivalTime,
      flightNumber: this.flightNumber,
      numOfGuests: this.numOfGuests,
    };
    if (this.comments) payload.comments = this.comments;
    this.http.post(url, payload, { headers }).subscribe({
      next: () => {
        this.message = 'Flight info submitted successfully!';
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Submission failed. Please check your details and try again.';
        this.loading = false;
      }
    });
  }
}
