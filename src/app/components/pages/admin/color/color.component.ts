import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorService } from '../../../../service/color.service';
import { Color } from '../../../../model/color';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ColorPickerModule,
    NgFor
  ],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent implements OnInit{
  color1: string = '#2889e9';
  nameFr: string = '';
  nameEn: string = '';
  selectedColor: string = '#2889e9';
  colorService: ColorService;
  availableColors: Color[] = [];

  constructor( colorService: ColorService) {
    this.colorService = colorService;
  }
  async ngOnInit() {
    await this.colorService.getColors().then( colors =>{
      this.availableColors = colors;
      console.log(colors);
    });
  }

  async addColor() {
    console.log(this.selectedColor);
    await this.colorService.addColor(new Color(this.nameFr,this.nameEn, this.selectedColor)).then(colors => {
      this.availableColors = colors;
    });
  }

  onChangeColorHex8(color: string) {
    this.selectedColor = color;
  }
}
