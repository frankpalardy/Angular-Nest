import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products'; // adjust this URL to match your backend endpoint

  constructor(private http: HttpClient) { }

  // Add methods to interact with your backend
  // For example:
  search(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  findById(id: string): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).toPromise();
  }
}