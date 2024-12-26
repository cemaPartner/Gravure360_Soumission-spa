import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onSubmit()">
      <label for="email">Email:</label>
      <input id="email" [(ngModel)]="email" name="email" required />
      
      <label for="password">Password:</label>
      <input id="password" type="password" [(ngModel)]="password" name="password" required />
      
      <button type="submit">Register</button>
    </form>
  `,
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    console.log('Registered with:', this.email, this.password);
    this.authService.register(this.email, this.password, "User");
  }
}
