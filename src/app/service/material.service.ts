import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Material } from '../model/material';


@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  async getMaterials(): Promise<Array<Material>> {
    try {
      return await firstValueFrom(
        this.http.get<Material[]>(`${this.baseUrl}/api/material/get`)
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
        this.http.post<Material[]>(`${this.baseUrl}/api/material/add`, material, {
          headers,
        })
      );
    } catch (error) {
      console.error('Error adding material:', error);
      return [];
    }
  }
}
