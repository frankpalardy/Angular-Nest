import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Promise<any> {
    return this.http.post<{accessToken: string}>(`${this.apiUrl}/login`, { username, password }).toPromise();
  }
} 