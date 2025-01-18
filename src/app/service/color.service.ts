import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Material } from '../model/material';
import { BFF_CONFIG } from '../bff.config';
import { Color } from '../model/color';


@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colorList: Array<Color> = []

  constructor(private http: HttpClient) {}

  async getColors(): Promise<Array<Color>> {
    try {
      this.colorList = await firstValueFrom(
        this.http.get<Color[]>(`${BFF_CONFIG.BACKEND_URL}/api/color/get`));
      return this.colorList;
    } catch (error) {
      console.error('Error fetching colors:', error);
      return [];
    }
  }

  async addColor(color: Color): Promise<Array<Color>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      this.colorList =  await firstValueFrom(
        this.http.post<Color[]>(`${BFF_CONFIG.BACKEND_URL}/api/color/add`, color, {
          headers,
        }));
        return this.colorList;
    } catch (error) {
      console.error('Error adding color:', error);
      return [];
    }
  }

  getColorList(): Array<Color> {
    if(this.colorList.length === 0) {
      this.getColors();
    }
    return this.colorList;
  }

  getColorHex(colorId: number): string {
    console.log(colorId);
    const color = this.colorList.find(c => c.id === colorId);
    return color ? color.hex : '#FFFFFF';
  }
}
