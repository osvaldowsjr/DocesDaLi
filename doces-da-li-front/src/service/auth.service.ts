import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public router: Router) {}

  getAccessToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  logout() {
    if (localStorage.removeItem('token') == null) {
      this.router.navigate(['/login']);
    }
  }

  get adminUser(): boolean {
    if (localStorage.getItem('id_cliente') == 'admin@admin.com') {
      return true;
    }
    return false;
  }
}
