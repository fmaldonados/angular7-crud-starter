import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardEditor implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate() {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser.role == "Admin" || currentUser.role == "Editor") {
            // authorised so return true
            return true;
        }
    
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        return false;
    }
}