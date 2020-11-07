import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css'],
})
export class InterceptorComponent {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.authService.getAccessToken();
    req = req.clone({
      setHeaders: {
        Authorization: `JWT $[accessToken}`,
      },
    });
    return next.handle(req);
  }
}
