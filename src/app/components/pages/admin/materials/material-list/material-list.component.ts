import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { MaterialItemComponent } from './material-item/material-item.component';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgForOf } from '@angular/common';
import { Material } from '../../../../../model/material';
import { MaterialService } from '../../../../../service/material.service';

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
  @Input() materials = new Array<Material>;
  @Output() selectedMaterialIndex = new EventEmitter<number>;

  constructor() { 
  }

  ngOnInit() {
  }

  selectMaterial(index: number): void {
    this.selectedMaterialIndex.emit(index);
  }
}
