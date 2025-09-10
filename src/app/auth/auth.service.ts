import { Injectable } from '@angular/core';
import { Auth, user, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth);
  }

  async login() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async logout() {
    await signOut(this.auth);
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  get isLoggedIn(): boolean{
    return !!this.auth.currentUser;
  }
}
