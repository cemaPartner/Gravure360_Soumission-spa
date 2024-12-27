import { Component, inject, signal } from "@angular/core";
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
import { User } from "../../../model/user";

@Component({
  selector: 'register-dialog',
  templateUrl: 'dialogRegister.component.html',
  styleUrl: 'dialogRegister.component.scss',
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
export class DialogRegister {
  readonly dialogRef = inject(MatDialogRef<DialogRegister>);
  hide = signal(true);
  firstName: string = '';
  lastName: string = '';
  company: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) { }

  close(): void {
    this.dialogRef.close();
  }

  continue(): void {
    if (this.isFormValid()) {
      const registerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        passwordHash: this.password,
        email: this.email,
        phone: this.phoneNumber
      };
      this.authService.register(registerData);
      console.log('Registration Successful');
      this.dialogRef.close();
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  isFormValid(): boolean {
    return (
      this.firstName.trim().length > 0 &&
      this.lastName.trim().length > 0 &&
      this.company.trim().length > 0 &&
      this.email.trim().length > 0 &&
      this.phoneNumber.trim().length > 0 &&
      this.password.length >= 6 &&
      this.password === this.confirmPassword
    );
  }
}
