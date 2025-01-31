import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Material } from '../model/material';
import { BFF_CONFIG } from '../bff.config';


@Injectable({
  providedIn: 'root',
})
export class MaterialService {

  constructor(private http: HttpClient) {}

  async getMaterials(): Promise<Array<Material>> {
    try {
      return await firstValueFrom(
        this.http.get<Material[]>(`${BFF_CONFIG.BACKEND_URL}/api/material/get`)
      );
    } catch (error) {
      console.error('Error fetching materials:', error);
      return [];
    }
  }

  async addMaterial(material: Material): Promise<Array<Material>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      return await firstValueFrom(
        this.http.post<Material[]>(`${BFF_CONFIG.BACKEND_URL}/api/material/add`, material, {
          headers,
        })
      );
    } catch (error) {
      console.error('Error adding material:', error);
      return [];
    }
  }
}
