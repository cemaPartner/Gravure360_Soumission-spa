import { Component, inject } from '@angular/core';
import { QuoteService } from '../../../../service/quote.service';
import { Quote } from '../../../../model/quote';
import { AuthService } from '../../../../service/auth.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  standalone: true,
  imports: [
    RouterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.scss']
})
export class NewQuoteComponent {
  private _snackBar = inject(MatSnackBar);
  quoteData = {
    name: '',
    description: '',
    deliveryDate: ''
  };

  constructor(
    private router: Router,
    private quoteService: QuoteService,
    private authService: AuthService
  ) { }

  addQuote() {
    let quote = new Quote;
    if (!this.quoteData.name || !this.quoteData.description || !this.quoteData.deliveryDate) {
      alert('Veuillez remplir tous les champs.');
      return;
    } else {
      quote.description = this.quoteData.description;
      quote.name = this.quoteData.name;
      quote.userId = this.authService.getUserInfo().id;
      this.quoteService.addQuote(quote).then(() => {
        this.openSnackBar("Soumission créée");
        this.clearForm();
        this.router.navigate(['/']);
      });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000
    });
  }

  clearForm() {
    this.quoteData = {
      name: '',
      description: '',
      deliveryDate: ''
    };
  }
}