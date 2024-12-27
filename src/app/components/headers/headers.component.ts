import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogLogin } from './login/dialogLogin.component';
import { Subscription } from 'rxjs';
import { DialogRegister } from './register/dialogRegister.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatDividerModule, MatIconModule, NgIf],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit, OnDestroy {
  isConnected: boolean = false;
  readonly dialog = inject(MatDialog);
  private subscription: Subscription = new Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.activeUserObservable.subscribe((value) => {
      this.isConnected = value;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openLogin() {
    if (!this.isConnected) {
      const dialogRef = this.dialog.open(DialogLogin, {
        width: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      this.authService.logout();
    }
  }

  openRegister() {
    if (!this.isConnected) {
      const dialogRef = this.dialog.open(DialogRegister, {
        width: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      this.authService.logout();
    }
  }

  generateName(): string {
    return this.authService.currentUser.firstName + " " + this.authService.currentUser.lastName + " (" + this.authService.currentUser.company + ")";
  }
}