import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  canActivate(): boolean {
    if (this.authService.activeUserObservable) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}