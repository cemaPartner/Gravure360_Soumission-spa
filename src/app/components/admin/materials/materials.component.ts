import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialListComponent } from '../material-list/material-list.component';
import { NgIf } from '@angular/common';

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
    MaterialListComponent,
    NgIf],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {
  materialForm: FormGroup;
  menuItemName: string = "Ajouter un matériel";

  constructor(private fb: FormBuilder) {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      backgroundColor: ['', Validators.required],
      engravingColor: ['', Validators.required],
      width: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      thickness: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      adhesive: [false]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.materialForm.valid) {
      console.log('Form Data: ', this.materialForm.value);
    }
  }
}
