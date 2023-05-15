import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inspection } from './inspection.model';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private apiUrl = 'http://localhost:3000/inspections';

  constructor(private http: HttpClient) { }

  getInspection(id: number): Observable<Inspection> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inspection>(url);
  }

  // adicione outros métodos conforme necessário
}
