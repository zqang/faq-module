import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoading = false
  error!: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }


  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }
    const userId = form.value.userId
    const password = form.value.password

    this.isLoading = true;
    this.authService.login(userId, password)
    .subscribe(
      resData => {
        console.log(resData)
        this.isLoading = false;
        this.router.navigate(['/faqs']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
    form.reset();
  }
}
