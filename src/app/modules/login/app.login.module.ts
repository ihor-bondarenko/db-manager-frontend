import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AppLoginComponent } from './app.loginpage';
import { LoginRoutingModule } from './login-routing.module';
import {MdInputModule, MdCardModule, MdButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        MdInputModule,
        MdCardModule,
        MdButtonModule
    ],
    declarations: [
        AppLoginComponent
    ],
    providers: [ ]
})

export class LoginModule {}