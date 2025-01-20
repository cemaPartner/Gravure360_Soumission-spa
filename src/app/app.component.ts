import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialsComponent } from './components/pages/admin/materials/materials.component';
import { DialogRegister } from './components/headers/register/dialogRegister.component';
import { DialogLogin } from './components/headers/login/dialogLogin.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule,
    NgClass, 
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgIf,
    MatMenuModule,
    MaterialsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isShowing: boolean = false;
  isConnected: boolean = false;
  currentUser: User = new User;
  readonly dialog = inject(MatDialog);
  private subscription: Subscription = new Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.subscription = this.authService.activeUserObservable.subscribe((value) => {
      this.isConnected = value;
      this.currentUser = this.authService.currentUser;

      if(!this.isConnected) {
        this.openLogin();
      }
    });

    this.subscription = this.authService.openRegisterObservable.subscribe((value) => {
      console.log(value);
      if(value === true) {
        this.openRegister();
      }
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
      this.router.navigate(['/']);
    }
  }

   public openRegister() {
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
  parentFunction(data: any) {
    console.log('Parent function called with data:', data);
  }

  generateName(): string {
    return this.authService.currentUser.firstName + " " + this.authService.currentUser.lastName + " (" + this.authService.currentUser.company + ")";
  }

  toggleSideBar() {
    this.isShowing = !this.isShowing;
  }

  goToAdminMaterials() {
    this.router.navigate(['/admin/materials']);
    this.isShowing = false;
  }

  goToAdminColors() {
    this.router.navigate(['/admin/colors']);
    this.isShowing = false;
  }

  goToAdminCosting() {
    this.router.navigate(['/admin/costing']);
    this.isShowing = false;
  }

  goToAdminQuotes() {
    this.router.navigate(['/admin/quotes']);
    this.isShowing = false;
  }

  goToAdminOrders() {
    this.router.navigate(['/admin/orders']);
    this.isShowing = false;
  }

  goToAdminInventory() {
    this.router.navigate(['/admin/inventory']);
    this.isShowing = false;
  }

  goToAdminClients() {
    this.router.navigate(['/admin/clients']);
    this.isShowing = false;
  }

  goToNewQuote() {
    this.router.navigate(['/new-quote']);
    this.isShowing = false;
  }

  goToEditQuote() {
    this.router.navigate(['/edit-quote']);
    this.isShowing = false;
  }

  goToPendingQuote() {
    this.router.navigate(['/pending-quote']);
    this.isShowing = false;
  }

  goToOrders() {
    this.router.navigate(['/orders']);
    this.isShowing = false;
  }

  goToWelcome() {
    this.router.navigate(['/']);
    this.isShowing = false;
  }
}