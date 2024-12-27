import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { HeadersComponent } from './components/headers/headers.component';
import { AddComponent } from "./components/soumission/add/add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, HeadersComponent, AddComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {}

}