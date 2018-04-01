import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl = "http://dnd5eapi.co/api/";

  constructor(private http: HttpClient) { }

  async getItemList() {
  }

}
