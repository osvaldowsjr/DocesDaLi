import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doces-da-li-front';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
