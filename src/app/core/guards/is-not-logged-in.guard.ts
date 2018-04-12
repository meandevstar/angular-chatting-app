import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate() {
        return this.redirectIfNotLoggedIn();
    }

    canActivateChild() {
        return this.redirectIfNotLoggedIn();
    }

    redirectIfNotLoggedIn() {
        const isLoggedIn = this.authService.isLoggedIn();
        if (isLoggedIn) {
            this.router.navigate(['']);
        }
        return !isLoggedIn;
    }
}
