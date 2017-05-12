import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/app.auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {
        /*this.auth.isLoggedIn().subscribe((token: boolean) => {
            if(!token){
                this.router.navigate(['/home']);
            }
        });*/
    }

    canActivate() {
        return this.auth.isLoggedIn()
            .map((result) => {
                if (result) {
                    this.router.navigate(['/home']);
                    return false;
                } else {
                    return true;
                }
            });
    }
}