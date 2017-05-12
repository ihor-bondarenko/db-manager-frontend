import { Component } from '@angular/core';
//import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
//import { AppSnakeBarService } from '../../services/snakbar/app.snakebar.service';
//import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/app.auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.loginpage.html',
    styleUrls: ['./app.loginpage.css']
})

export class AppLoginComponent {

    private name;
    private password;

    constructor(private authService: AuthService){
    }

    login() {
        this.authService.login(this.name, this.password);
        //headers.append('Content-Type', 'application/json');
        //let options = new RequestOptions({ headers: headers });

    }
}