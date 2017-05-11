import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app.homepage';

const homeRoutes: Routes = [
    { path: 'home',  component: AppHomeComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
