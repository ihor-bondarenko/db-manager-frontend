import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app.homepage';
import { AuthGuard } from '../../services/auth/app.auth-guard.service';

const homeRoutes: Routes = [
    {
        canActivate: [AuthGuard],
        path: 'home',
        component: AppHomeComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]

})
export class HomeRoutingModule { }
