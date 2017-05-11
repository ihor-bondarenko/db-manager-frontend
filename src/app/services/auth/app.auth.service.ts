import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor() {}

    loggedIn() {
        return tokenNotExpired();
    }
}