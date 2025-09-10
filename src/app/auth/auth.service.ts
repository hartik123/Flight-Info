import { Injectable } from '@angular/core';
import { Auth, user, GoogleAuthProvider, signInWithPopup, signOut, User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth);
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    return result.user;
  }

  async signup(email: string, password: string) {
    const result = await createUserWithEmailAndPassword(this.auth, email, password);
    return result.user;
  }

  async loginWithEmail(email: string, password: string) {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
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
