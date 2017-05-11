import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app.loginpage';
import { LoginGuard } from './app.login-guard.service';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: AppLoginComponent,
        canActivate: [LoginGuard]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoginGuard
    ]
})
export class LoginRoutingModule { }
