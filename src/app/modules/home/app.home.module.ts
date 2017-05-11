import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AppHomeComponent } from './app.homepage';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
    declarations: [
        AppHomeComponent
    ],
    providers: [ ]
})

export class HomePageModule {}