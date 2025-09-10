import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {}

  async login() {
    const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
    return result.user;
  }

  async logout() {
    await signOut(this.auth);
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
