import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()">
      <label for="email">Email:</label>
      <input id="email" [(ngModel)]="email" name="email" required />
      
      <label for="password">Password:</label>
      <input id="password" type="password" [(ngModel)]="password" name="password" required />
      
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    console.log('Logged in with:', this.email, this.password);
    this.authService.login(this.email, this.password);
    this.router.navigate(['/profile']);
  }
}