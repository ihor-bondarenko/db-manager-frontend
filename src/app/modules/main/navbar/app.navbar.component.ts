import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/app.auth.service';
import { Observable } from "rxjs";

interface User {
    _id: string;
    name: string;
    admin: boolean;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './app.navbar.html',
    styleUrls: ['./app.navbar.css']
})
export class AppNavbarComponent {
    private Title = 'RCO Database Manager';
    public username: Observable<string>;
    public user: User;
    isLoggedIn : Observable<boolean>;

    constructor( private authService: AuthService) {
        this.isLoggedIn = this.authService.isLoggedIn();
        authService.userData.subscribe((result) => {
           this.user = result;
        });
    }

    logout() {
        this.authService.logout();
    }

    clearToken() {
        this.authService.removeToken();
    }
}
