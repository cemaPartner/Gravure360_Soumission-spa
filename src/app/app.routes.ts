import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SoumissionPageComponent } from './components/soumission/soumission-page.component';
import { AuthGuardAdmin } from './auth/auth-admin.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'admin', component: SoumissionPageComponent, canActivate: [AuthGuardAdmin] },
  { path: 'soumission', component: SoumissionPageComponent, canActivate: [AuthGuard] },
];
