import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(public router: Router, @Inject(PLATFORM_ID) private platformId) {
        /*if (!this.isServer) {
          this.user = JSON.parse(localStorage.getItem('authUser'));
        }*/
    }
    canActivate() {
        if (!isPlatformServer(this.platformId)) {
            if (localStorage.getItem('authUser')) {
                // logged in so return true
                return true;
            }
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
    canDeactivate() {
        if (!isPlatformServer(this.platformId)) {
            if (!localStorage.getItem('authUser')) {
                // logged in so return true
                
                return true;
            }
            this.router.navigate(['/']);
        } else {
            return true;
        }
        // logged in so redirect to main page
    }
    canActivateChild() {
        if (!isPlatformServer(this.platformId)) {
            if (!localStorage.getItem('authUser')) {
                // logged in so return true
                
                return true;
            }
            this.router.navigate(['/']);
        } else {
            return true;
        }
    }

}
