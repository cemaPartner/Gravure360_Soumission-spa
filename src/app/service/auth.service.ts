import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    console.log('Attempting to log in...');
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/auth/login`, { username, password }).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Save the token to localStorage
        localStorage.setItem('token', response.token);
        // You can also navigate to the dashboard or other routes here
      },
      error: (err) => {
        console.error('Login error:', err);
        // Handle error (e.g., show error message to the user)
      }
    });
  }

  register(username: string, password: string, role: string) {
    console.log('Attempting to register...');
    return this.http.post(`${this.apiUrl}/api/auth/register`, { username, password, role }).subscribe({
      next: (response) => {
        console.log('Register successful:', response);
        // Handle successful login (e.g., save the token, navigate to the dashboard)
      },
      error: (err) => {
        console.error('Register error:', err);
        // Handle error (e.g., show error message to the user)
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    let value = token && !this.jwtHelper.isTokenExpired(token);
    if (typeof value === "boolean") {
        return value;
    } else {
        return false;
    }
  }

  getRole(): string | null {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token).role : null;
  }
}
