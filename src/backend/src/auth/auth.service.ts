import { SignInDto } from '../dto/signin.dto'; 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth'; // Adjust the URL as needed

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(`${this.apiUrl}/login`, { username, password });
    }

    logout(user: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, { user });
    }
    validateUser(username: string, password: string): boolean {
   // const user = this.users.find(user => user.username === username && user.password === password);
   // return user !== undefined;
   return true;
}
}

 