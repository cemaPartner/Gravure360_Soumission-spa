import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h2>Profile</h2>
    <p>Welcome to your profile!</p>
  `,
})
export class ProfileComponent {}
