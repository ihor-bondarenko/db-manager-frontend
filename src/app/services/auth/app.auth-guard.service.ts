import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './app.auth.service';
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {
        /*this.auth.isLoggedIn().subscribe((token: boolean) => {
            console.log('tokenex:' + token);
            if(!token){
                 this.router.navigate(['/login']);
            }
        });*/
    }

    canActivate(): Observable<boolean> {
        return this.auth.isLoggedIn()
            .map((result) => {
                if (result) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            });
    }
}