import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    return this.authService.admin.pipe(
      take(1),
      exhaustMap(admin => {
        if(admin.jwt === ''){
          console.log('admin don have')
          return next.handle(req);
        }
        let tokenStr = 'Bearer ' + admin.jwt
        console.log('admin have')
        const authReq = req.clone({ setHeaders: { Authorization: tokenStr } });
        console.log(authReq)
        return next.handle(authReq);
      })
    )
  }
}
