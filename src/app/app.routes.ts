import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];