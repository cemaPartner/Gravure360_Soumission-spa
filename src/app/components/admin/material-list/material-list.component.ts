import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { MaterialItemComponent } from './material-item/material-item.component';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgForOf } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    MaterialItemComponent,
    MatCardModule,
    NgForOf,
    NgClass],
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
    },
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
    },
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
    },
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
  @Output() selectedMaterialIndex = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void { }

  selectMaterial(index: number): void {
    this.selectedMaterialIndex.emit(index);
  }
}
