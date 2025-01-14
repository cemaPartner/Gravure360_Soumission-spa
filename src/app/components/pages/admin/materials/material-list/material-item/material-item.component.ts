import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-item',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './material-item.component.html',
  styleUrl: './material-item.component.scss'
})
export class MaterialItemComponent {
  @Input() material: any;
}
