import { Component, inject, model, signal } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from "../../../service/auth.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'login-dialog',
  templateUrl: 'dialogLogin.component.html',
  styleUrl: 'dialogLogin.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    NgIf
  ],
})
export class DialogLogin {
  readonly dialogRef = inject(MatDialogRef<DialogLogin>);
  hide = signal(true);
  loginError: boolean = false;
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  close(): void {
    this.dialogRef.close();
  }

  async continue(): Promise<void> {
    try {
      const status: boolean = await this.authService.login(this.email, this.password);
      if (status) {
        this.dialogRef.close();
      } else {
        this.loginError = true;
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.loginError = true;
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}