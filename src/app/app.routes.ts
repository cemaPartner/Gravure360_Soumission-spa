import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin/admin-page.component';
import { SoumissionPageComponent } from './components/soumission/soumission-page.component';
import { AuthGuardAdmin } from './auth/auth-admin.guard';

export const routes: Routes = [
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardAdmin] },
  { path: 'soumission', component: SoumissionPageComponent, canActivate: [AuthGuard] },
];