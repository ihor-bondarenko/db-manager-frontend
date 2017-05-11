import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './app.auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if(this.auth.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}