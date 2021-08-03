import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private adminSub!: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.adminSub = this.authService.admin.subscribe(admin => {
      this.isAuthenticated = admin.jwt === '' ? false: true;
    });
  }

  ngOnDestroy(): void{
    this.adminSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

}
