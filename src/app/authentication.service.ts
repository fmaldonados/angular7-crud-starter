import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    ) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    
  }

  login(data) {
    this.http.post(`${this.apiUrl}/login`, data)
    .subscribe( (user: any) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.router.navigate(['/category']);
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
