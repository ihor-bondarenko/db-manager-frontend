import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private router: Router) {}

    loggedIn(): any {
        return tokenNotExpired();
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}