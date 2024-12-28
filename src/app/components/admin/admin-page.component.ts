import { Component, Injectable } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsComponent } from './materials/materials.component';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MaterialsComponent,
    NgIf],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  menuToShow: number = 0;

  changeMenu(arg0: number) {
    this.menuToShow = arg0;
  }

}
