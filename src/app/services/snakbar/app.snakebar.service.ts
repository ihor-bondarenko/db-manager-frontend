import {Injectable, EventEmitter} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Observable} from 'rxjs/Rx.d';
import { Subject } from 'rxjs/Subject.d';
import { AppSnackbarComponent } from "./app.snakebar.component";

@Injectable()
export class AppSnakeBarService {
    constructor(public snackBar: MdSnackBar) {
        //
    }
    openSnackBar(message: string, action: string) {
        /* this.snackBar.open(message, action, {
         duration: 2000,
         });*/
        this.snackBar.open(message, action, {
            duration: 3000
        });
        /*this.snackBar.openFromComponent(AppSnackbarComponent, {
         duration: 4000,
         announcementMessage: message,
         politeness: 'polite'
         });*/
    }

    showSuccess(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 6000,
            extraClasses: ['success-snakebar']
        });
    }

    showError(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 6000,
            extraClasses: ['error-snakebar']
        });
    }
}