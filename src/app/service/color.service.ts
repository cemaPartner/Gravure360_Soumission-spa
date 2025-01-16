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

  constructor(private http: HttpClient) {}

  async getColors(): Promise<Array<Color>> {
    try {
      return await firstValueFrom(
        this.http.get<Color[]>(`${BFF_CONFIG.BACKEND_URL}/api/color/get`)
      );
    } catch (error) {
      console.error('Error fetching colors:', error);
      return [];
    }
  }

  async addColor(color: Color): Promise<Array<Color>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      console.log(color);
      return await firstValueFrom(
        this.http.post<Color[]>(`${BFF_CONFIG.BACKEND_URL}/api/color/add`, color, {
          headers,
        })
      );
    } catch (error) {
      console.error('Error adding color:', error);
      return [];
    }
  }
}
