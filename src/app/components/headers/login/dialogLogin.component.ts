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
    MatIconModule
  ],
})
export class DialogLogin {
  readonly dialogRef = inject(MatDialogRef<DialogLogin>);
  hide = signal(true);
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  close(): void {
    this.dialogRef.close();
  }

  continue(): void {
    this.authService.login(this.email, this.password);
    this.dialogRef.close();
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}