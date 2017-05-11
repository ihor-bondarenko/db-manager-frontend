import { Component } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {MdSnackBar} from '@angular/material';
import { AppSnakeBarService } from '../../services/snakbar/app.snakebar.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.loginpage.html',
    styleUrls: ['./app.loginpage.css']
})

export class AppLoginComponent {

    private name;
    private password;

    constructor(public authHttp: AuthHttp, public snakbar: AppSnakeBarService){
    }

    login() {
        //headers.append('Content-Type', 'application/json');
        //let options = new RequestOptions({ headers: headers });
        this.authHttp.post('http://localhost:8080/api/authenticate', {name: this.name, password: this.password})
            .subscribe(
                data => {
                    data.json().success ? this.snakbar.showSuccess(data.json().message, 'Close') : this.snakbar.showError(data.json().message, 'Close');
                    localStorage.setItem('token', data.json().token);
                    console.log(data.json());
                    console.log(tokenNotExpired());
                },
                err => console.log(err),
                () => console.log('Request Complete')
            );
    }
}