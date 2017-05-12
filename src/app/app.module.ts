import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdInputModule, MdSnackBarModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './modules/main/navbar/app.navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { HomePageModule } from './modules/home/app.home.module';
import { LoginModule } from './modules/login/app.login.module';
import { PageNotFoundComponent } from './not-found.component';
import { AuthModule } from './modules/auth/app.auth.module';

import { AppSnakeBarService } from './services/snakbar/app.snakebar.service';
import { AuthService } from './services/auth/app.auth.service';
import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage.forRoot({ prefix: '', separator: '' }),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    HomePageModule,
    LoginModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    AppSnakeBarService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
