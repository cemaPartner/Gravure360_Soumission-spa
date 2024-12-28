import { Component } from '@angular/core';
import { MaterialItemComponent } from './material-item/material-item.component';
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    MaterialItemComponent, 
    MatCardModule,
    NgForOf],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.scss'
})
export class MaterialListComponent {
  materials = [
    {
      name: 'Matériau 1',
      brand: "Troteck",
      backgroundColor: 'Rouge',
      engravingColor: 'Blanc',
      width: '200mm',
      height: '100mm',
      thickness: '1.6mm',
      price: '50€',
      quantity: '20',
      adhesive: true
    },
    {
      name: 'Matériau 2',
      brand: "Troteck",
      backgroundColor: 'Bleu',
      engravingColor: 'Noir',
      width: '150mm',
      height: '80mm',
      thickness: '0.8mm',
      price: '30€',
      quantity: '10',
      adhesive: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
