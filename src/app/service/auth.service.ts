import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private jwtHelper = new JwtHelperService();
  public currentUser: User;
  private activeUser = new BehaviorSubject<boolean>(false);

  activeUserObservable = this.activeUser.asObservable();

  constructor(private http: HttpClient) {
    this.currentUser = new User();
  }

  login(username: string, password: string) {
    console.log('Attempting to log in...');
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/auth/login`, { username, password }).subscribe({
      next: (response) => {
        this.activeUser.next(true);
        localStorage.setItem('token', response.token);
        this.decodeUser();
      },
      error: (err) => {
        console.error('Login error:', err);
      }
    });
  }

  register(user: any) {
    console.log('Attempting to register...');
    return this.http.post(`${this.apiUrl}/api/auth/register`, { 
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      passwordHash: user.passwordHash,
      email: user.email,
      phone: user.phone }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe({
      next: (response) => {
        console.log('Register successful:', response);
      },
      error: (err) => {
        console.error('Register error:', err);
      }
    });
  }

  logout() {
    this.activeUser.next(false);
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole(): string {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token).role : null;
  }

  decodeUser() {
    const token = this.getToken();
    if (token) {
      this.currentUser.email = this.jwtHelper.decodeToken(token).email;
      this.currentUser.firstName = this.jwtHelper.decodeToken(token).firstName;
      this.currentUser.lastName = this.jwtHelper.decodeToken(token).lastName;
      this.currentUser.company = this.jwtHelper.decodeToken(token).company;
      this.currentUser.phone = this.jwtHelper.decodeToken(token).phone;
      this.currentUser.role = this.jwtHelper.decodeToken(token).role;
      this.currentUser.id = this.jwtHelper.decodeToken(token).id;
    }
  }

  getUserInfo(): User {
    return this.currentUser;
  }
}
