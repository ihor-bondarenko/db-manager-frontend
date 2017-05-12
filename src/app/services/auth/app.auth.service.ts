import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { AppSnakeBarService } from '../../services/snakbar/app.snakebar.service';
import {LocalStorageService} from 'ngx-webstorage';

interface User {
    _id: string;
    name: string;
    admin: boolean;
}

@Injectable()
export class AuthService {

    private user: User = {
        name: 'guest',
        admin: false,
        _id: ''
    };
    isLoginSubject = new BehaviorSubject<boolean>(this.loggedIn());
    private _userSubject = new BehaviorSubject<User>(this.user);
    public userData: Observable<User> = this._userSubject.asObservable();

    constructor(private router: Router, private authHttp: AuthHttp, public snakbar: AppSnakeBarService, private storage: LocalStorageService) {
        if(this.storage.retrieve('user')) {
            this.user = this.storage.retrieve('user');
            this._userSubject.next(this.user);
        }
        this.storage.observe('token')
            .subscribe((value) => {
                if(tokenNotExpired()) {
                    this.isLoginSubject.next(true);
                    this.router.navigate(['/home']);
                }else{
                    this.isLoginSubject.next(false);
                    this.router.navigate(['/login']);
                }
            });
        this.storage.observe('user')
            .subscribe((user) => {
                if(!user) {
                    user = this.user;
                }
                if(typeof user !== 'object') {
                    try{
                        user = JSON.parse(user);
                    }catch(e) {
                        console.log(e);
                    }

                }
                console.log(user);
                this._userSubject.next(user);
        });
    }

    private loggedIn(): any {
        return tokenNotExpired();
    }

    isLoggedIn() : Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    private getUser() {
        return this.user;
    }

    login(username: string, password: string): void {
        this.authHttp.post('http://localhost:8080/api/authenticate', {name: username, password: password})
            .subscribe(
                data => {
                    if(data.json().success) {
                        this.snakbar.showSuccess('Success logged', 'Close');
                        this.storage.store('token', data.json().token.toString());
                        //localStorage.setItem('token',data.json().token);
                       // this._userSubject.next(data.json().user);
                        this.storage.store('user', JSON.stringify(data.json().user));
                        this.isLoginSubject.next(true);
                        this.router.navigate(['/home']);
                        return true;
                    }
                    this.snakbar.showError(data.json().message, 'Close');
                    this.isLoginSubject.next(false);
                },
                err => console.log(err),
                () => console.log('Request Complete')
            );
    }

    logout(): void {
        this.storage.clear('token');
        this.storage.clear('user');
        //localStorage.removeItem('token');
        this.snakbar.showSuccess('Logged out', 'Close');
        this.router.navigate(['/login']);
        this.isLoginSubject.next(false);
    }

    removeToken(): void {
        this.storage.clear('token');
        //localStorage.removeItem('token');
        this.isLoginSubject.next(false);
    }
}