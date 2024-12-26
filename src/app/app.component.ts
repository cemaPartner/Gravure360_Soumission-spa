import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <h1>Angular Standalone Auth Example</h1>
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/register">Register</a>
      <a routerLink="/profile">Profile</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor() {}

}