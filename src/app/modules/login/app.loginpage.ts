import { Component } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSnakeBarService } from '../../services/snakbar/app.snakebar.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.loginpage.html',
    styleUrls: ['./app.loginpage.css']
})

export class AppLoginComponent {

    private name;
    private password;

    constructor(public authHttp: AuthHttp, public snakbar: AppSnakeBarService, private router: Router){
    }

    login() {
        //headers.append('Content-Type', 'application/json');
        //let options = new RequestOptions({ headers: headers });
        this.authHttp.post('http://localhost:8080/api/authenticate', {name: this.name, password: this.password})
            .subscribe(
                data => {
                    data.json().success ? this.snakbar.showSuccess(data.json().message, 'Close') : this.snakbar.showError(data.json().message, 'Close');
                    localStorage.setItem('token', data.json().token);
                    if(data.json().success) {
                        this.router.navigate(['/home']);
                    }
                },
                err => console.log(err),
                () => console.log('Request Complete')
            );
    }
}