// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5187/api/Users';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
