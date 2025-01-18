import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { User } from '../../../../model/user';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatCardModule,
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  isConnected: boolean = false;
  currentUser: User = new User;
  private subscription: Subscription = new Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.activeUserObservable.subscribe((value) => {
      this.isConnected = value;
      this.currentUser = this.authService.currentUser;
    });
  }

}
