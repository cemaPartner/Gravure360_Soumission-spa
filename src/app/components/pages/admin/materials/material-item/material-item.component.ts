import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-item',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
  ],
  templateUrl: './material-item.component.html',
  styleUrl: './material-item.component.scss'
})
export class MaterialItemComponent {
  color1: string = '#FF5733'; // Color for the first card
  color2: string = '#33FF57'; // Color for the second card
  isTransparent: boolean = false; // Whether the card is transparent
  @Input() material: any;
}
