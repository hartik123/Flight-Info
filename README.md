# FlightInfoApp

FlightInfoApp is a web application that allows users to log in, fill flight information forms, and track submission status. The app supports **Google Authentication** for seamless login and provides an intuitive interface for flight data entry.

---

## Features

- **User Authentication:** Sign in and sign up with email/password or Google account.
- **Flight Information Form:** Users can submit detailed flight information.
- **Form Validation:** Ensures all required fields are correctly filled before submission.
- **Submission Status:** Users can track the status of their submitted forms.
- **Responsive UI:** Clean and user-friendly interface for all pages.

---

## API Endpoints

The app communicates with the backend via the following endpoints:

| Endpoint       | Method | Description                                      |
|----------------|--------|--------------------------------------------------|
| `/login`       | POST   | Authenticate existing users                      |
| `/signup`      | POST   | Register new users                               |
| `/flight-form` | POST   | Submit flight information (requires auth)       |

**Note:** For the flight-form endpoint, headers required:


Payload format:

```ts
interface FlightInfoPayload { 
  airline: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  numOfGuests: number;
  comments?: string;
}
```


---

## Features

- **User Authentication:** Sign in and sign up with email/password or Google account.
- **Flight Information Form:** Users can submit detailed flight information.
- **Form Validation:** Ensures all required fields are correctly filled before submission.
- **Submission Status:** Users can track the status of their submitted forms.
- **Responsive UI:** Clean and user-friendly interface for all pages.

---

## App Screenshots

### Sign In Page
![Sign In Page](https://github.com/user-attachments/assets/d641f276-6aee-4da7-aa3c-034cb6328a65)

### Sign Up Page
![Sign Up Page](https://github.com/user-attachments/assets/71110d2e-f5f2-4c86-b070-40f75c8f3906)

### Logging in via Google Authentication
![Google Auth Login](https://github.com/user-attachments/assets/88fdbe33-626c-45a9-9429-facac3eb1b67)

### Flight Form Page
![Flight Form Page](https://github.com/user-attachments/assets/eae60f14-680e-4942-904d-cfd62c2be99a)

### Filled Flight Form
![Filled Flight Form](https://github.com/user-attachments/assets/f7055ce0-b1ce-4e66-8151-5dd449eb40b3)

### Form Submission Status
![Form Submission Status](https://github.com/user-attachments/assets/77faeaca-ca19-464f-892e-ff23eba10fb4)

---

## Technologies Used

- **Frontend:** Angular
- **Authentication:** Firebase Authentication (Google Sign-In)
- **Hosting:** Firebase Hosting
- **Styling:** Angular, Tailwind CSS


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
