import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class LogUpdateService {

  constructor(updates: SwUpdate, snackBar: MatSnackBar) {

    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      snackBar.open(
        'A new version of the app has loaded.',
        'Close',
        {duration: 5000}
      );
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
