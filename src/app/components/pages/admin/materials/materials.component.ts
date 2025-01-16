import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgFor, NgIf } from '@angular/common';
import { MaterialService } from '../../../../service/material.service';
import { Material } from '../../../../model/material';
import { MaterialItemComponent } from './material-item/material-item.component';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    MatCardModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatCheckboxModule,
    NgIf,
    NgFor,
    MaterialItemComponent],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {
  @Output() selectedMaterialIndex = new EventEmitter<number>;
  materialService: MaterialService;
  materials = new Array<Material>;
  materialForm: FormGroup;
  menuItemName: string = "Ajouter un matériel";

  constructor(private fb: FormBuilder, materialService: MaterialService) {
    this.materialService = materialService;
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      backgroundColor: ['', Validators.required],
      engravingColor: ['', Validators.required],
      width: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      thickness: ['', [Validators.required, Validators.min(1)]],
      stock: ['', [Validators.required, Validators.min(1)]],
      adhesive: [false]
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.materials = await this.materialService.getMaterials();
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.materialForm.valid) {
      this.materials = await this.materialService.addMaterial(this.getNewMaterial());
    }
  }

  getNewMaterial(): Material {
    let material: Material = new Material;
    material.name = this.materialForm.get('name')?.value;
    material.brand = this.materialForm.get('brand')?.value;
    material.backgroundColor = this.materialForm.get('backgroundColor')?.value;
    material.engravingColor = this.materialForm.get('engravingColor')?.value;
    material.width = this.materialForm.get('width')?.value;
    material.height = this.materialForm.get('height')?.value;
    material.price = this.materialForm.get('price')?.value;
    material.thickness = this.materialForm.get('thickness')?.value;
    material.stock = this.materialForm.get('stock')?.value;
    material.adhesive = this.materialForm.get('adhesive')?.value;

    return material;
  }

  selectMaterial(index: number): void {
    this.selectedMaterialIndex.emit(index);
  }
}
