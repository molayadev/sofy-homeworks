import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { ROOT_PAGE } from '../../constants/app-config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth,
              private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        const userLogged = JSON.stringify(user);
        localStorage.setItem('user', userLogged);
        console.log(userLogged);
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    console.log(email, password);
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    setTimeout(() => this.logout(), 3600000);
    this.router.navigate([ROOT_PAGE]);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.afAuth.signOut();
  }
}
