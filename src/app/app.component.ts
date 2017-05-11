import { Component } from '@angular/core';
import { AuthService } from './services/auth/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private authService: AuthService) {

  }
  Title = 'RCO Database Manager';

  logout() {
    this.authService.logout();
  }
}
