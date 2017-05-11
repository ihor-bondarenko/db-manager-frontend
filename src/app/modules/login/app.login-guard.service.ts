import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/app.auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if(this.auth.loggedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}