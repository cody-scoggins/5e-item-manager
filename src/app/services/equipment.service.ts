import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  equipment: any;
  nameList: any[] = [];

  constructor(private http: HttpClient) {
  }

  getJson() {
    return this.http.get('assets/json/5e-SRD-Equipment.json');
  }

  getItemById() {

  }
}
