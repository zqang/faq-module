import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import { Router } from '@angular/router';

export interface AuthResponseData{
  userId: string;
  jwt: string;
  expirationDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin = new BehaviorSubject<Admin>(new Admin('', '', new Date()));
  
  constructor(
    private http: HttpClient,
    private router: Router) { }

  logout(){
    this.admin.next(new Admin('', '', new Date()));
    this.router.navigate(['/auth']);
  }

  login(username: string, password: string){
    return this.http.post<AuthResponseData>('http://localhost:8080/authenticate',{
      username: username, 
      password: password
    }).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
        resData.userId, 
        resData.jwt, 
        resData.expirationDate);
        })
    )
  }

  private handleAuthentication(userId: string, jwt: string, expiresIn: Date){
    const admin = new Admin(
        userId,  
        jwt, 
        expiresIn);
    this.admin.next(admin);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
      }
      return throwError(errorMessage);
  }

  

}
