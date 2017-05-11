import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app.loginpage';

const loginRoutes: Routes = [
    { path: 'login',  component: AppLoginComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }
