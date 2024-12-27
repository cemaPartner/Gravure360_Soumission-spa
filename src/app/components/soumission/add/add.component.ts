import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  materials = ['Wood', 'Metal', 'Plastic', 'Glass'];
  materialForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.materialForm = this.fb.group({
      material: [''],
      width: [''],
      height: [''],
      count: ['']
    });
  }

  onSubmit() {
    console.log(this.materialForm.value);
  }
}
