import { Component, inject, Injectable } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogLogin } from './dialogLogin.component';

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
export class HeadersComponent {
  isConnected: boolean = false;
  readonly dialog = inject(MatDialog);
  constructor(private router: Router, private authService: AuthService) {}

  OnInit() {
    this.isConnected = this.authService.isLoggedIn();
  }

  openLogin() {
    const dialogRef = this.dialog.open(DialogLogin, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}